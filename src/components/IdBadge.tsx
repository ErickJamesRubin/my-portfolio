import { useEffect, useRef, useState } from 'react'
import profileImg from '../assets/profile-new.jpg'
import qrImg from '../assets/qr.png'
import './IdBadge.css'

export default function IdBadge() {
  const [isDragging, setIsDragging] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const stageRef = useRef<HTMLDivElement>(null)
  const scalerRef = useRef<HTMLDivElement>(null)
  const pendulumRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const glossRef = useRef<HTMLDivElement>(null)

  // Physics & animation state kept in refs for 60fps RAF loop
  const angleRef = useRef(0)
  const velocityRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const isDraggingRef = useRef(false)

  // Pointer position normalized [-1, 1] relative to card center
  const pointerNormRef = useRef({ x: 0, y: 0 })
  const tiltRef = useRef({ x: 0, y: 0 })
  const glossPosRef = useRef({ x: 50, y: 30 })

  // Click vs Drag detection
  const pointerDownPosRef = useRef({ x: 0, y: 0 })
  const pointerDownTimeRef = useRef(0)
  const maxMoveDistRef = useRef(0)

  // Calculate stationary anchor point (top center of pendulum's parent container)
  const getAnchor = () => {
    if (scalerRef.current) {
      const rect = scalerRef.current.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2,
        y: rect.top,
      }
    }
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect()
      return {
        x: rect.left + rect.width / 2,
        y: rect.top,
      }
    }
    return { x: window.innerWidth / 2, y: 0 }
  }

  // Pointer event handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // ignore
    }
    isDraggingRef.current = true
    setIsDragging(true)
    lastTimeRef.current = performance.now()

    // Record initial press for click detection
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY }
    pointerDownTimeRef.current = performance.now()
    maxMoveDistRef.current = 0

    const anchor = getAnchor()
    const dx = e.clientX - anchor.x
    const dy = Math.max(15, e.clientY - anchor.y)
    let deg = -Math.atan2(dx, dy) * (180 / Math.PI)
    // Clamp to +/- 35 degrees
    deg = Math.max(-35, Math.min(35, deg))
    angleRef.current = deg
    velocityRef.current = 0

    if (cardRef.current) {
      const cRect = cardRef.current.getBoundingClientRect()
      const cx = cRect.left + cRect.width / 2
      const cy = cRect.top + cRect.height / 2
      pointerNormRef.current = {
        x: Math.max(-1, Math.min(1, (e.clientX - cx) / (cRect.width / 2))),
        y: Math.max(-1, Math.min(1, (e.clientY - cy) / (cRect.height / 2))),
      }
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Track distance moved from pointerdown for click vs drag
    const moveDist = Math.hypot(
      e.clientX - pointerDownPosRef.current.x,
      e.clientY - pointerDownPosRef.current.y
    )
    if (moveDist > maxMoveDistRef.current) {
      maxMoveDistRef.current = moveDist
    }

    if (cardRef.current) {
      const cRect = cardRef.current.getBoundingClientRect()
      const cx = cRect.left + cRect.width / 2
      const cy = cRect.top + cRect.height / 2
      pointerNormRef.current = {
        x: Math.max(-1, Math.min(1, (e.clientX - cx) / (cRect.width / 2))),
        y: Math.max(-1, Math.min(1, (e.clientY - cy) / (cRect.height / 2))),
      }
    }

    if (!isDraggingRef.current) return

    const now = performance.now()
    const dt = Math.max(0.001, (now - lastTimeRef.current) / 1000)
    lastTimeRef.current = now

    const anchor = getAnchor()
    const dx = e.clientX - anchor.x
    const dy = Math.max(15, e.clientY - anchor.y)
    let deg = -Math.atan2(dx, dy) * (180 / Math.PI)
    // Clamp to +/- 35 degrees while dragging
    deg = Math.max(-35, Math.min(35, deg))

    const instantVel = (deg - angleRef.current) / dt
    velocityRef.current = velocityRef.current * 0.3 + instantVel * 0.7
    // Cap velocity
    velocityRef.current = Math.max(-180, Math.min(180, velocityRef.current))

    angleRef.current = deg
  }

  // Reset angle, velocity, dragging flag and handle click-to-flip
  const handlePointerEnd = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (e && pendulumRef.current) {
      try {
        if (pendulumRef.current.hasPointerCapture(e.pointerId)) {
          pendulumRef.current.releasePointerCapture(e.pointerId)
        }
      } catch {
        // ignore
      }
    }

    // Click vs Drag: flip only if moved < 6px and press lasted < 300ms
    if (e && e.type === 'pointerup') {
      const pressDuration = performance.now() - pointerDownTimeRef.current
      if (maxMoveDistRef.current < 6 && pressDuration < 300) {
        setIsFlipped((prev) => !prev)
      }
    }

    isDraggingRef.current = false
    setIsDragging(false)
    lastTimeRef.current = performance.now()

    if (isNaN(velocityRef.current)) {
      velocityRef.current = 0
    } else {
      velocityRef.current = Math.max(-180, Math.min(180, velocityRef.current))
    }
    if (isNaN(angleRef.current)) {
      angleRef.current = 0
    } else {
      angleRef.current = Math.max(-35, Math.min(35, angleRef.current))
    }
  }

  // Keyboard accessibility handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsFlipped((prev) => !prev)
    }
  }

  // Window listeners for safety against stuck drag state
  useEffect(() => {
    const onGlobalUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false
        setIsDragging(false)
        lastTimeRef.current = performance.now()
        velocityRef.current = Math.max(-180, Math.min(180, velocityRef.current || 0))
      }
    }
    window.addEventListener('pointerup', onGlobalUp)
    window.addEventListener('pointercancel', onGlobalUp)
    return () => {
      window.removeEventListener('pointerup', onGlobalUp)
      window.removeEventListener('pointercancel', onGlobalUp)
    }
  }, [])

  // Animation frame loop with spring-damper pendulum physics
  useEffect(() => {
    let animId: number

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTimeRef.current) / 1000))
      lastTimeRef.current = now

      if (!isDraggingRef.current) {
        // At rest, target angle is exactly 0 (hanging straight down)
        const targetAngle = 0
        const angleDiff = angleRef.current - targetAngle

        // Strong spring and damping to settle cleanly within ~2 seconds
        const restoring = -38 * Math.sin(angleDiff * (Math.PI / 180)) * (180 / Math.PI)
        const dampingForce = -5.0 * velocityRef.current
        const acceleration = restoring + dampingForce

        velocityRef.current += acceleration * dt
        velocityRef.current = Math.max(-180, Math.min(180, velocityRef.current))

        angleRef.current += velocityRef.current * dt
        // Clamp pendulum angle to +/- 35 degrees in physics loop
        angleRef.current = Math.max(-35, Math.min(35, angleRef.current))

        // Settle straight at 0 once motion becomes negligible
        if (Math.abs(angleRef.current) < 0.05 && Math.abs(velocityRef.current) < 0.08) {
          angleRef.current = 0
          velocityRef.current = 0
        }
      }

      // 3D Card tilt
      let targetTiltX = 0
      let targetTiltY = 0

      if (isDraggingRef.current) {
        targetTiltX = -pointerNormRef.current.y * 10
        targetTiltY = (angleRef.current / 35) * 12
      } else {
        targetTiltY = (angleRef.current / 35) * 8 + (velocityRef.current / 180) * 6
        targetTiltX = Math.min(6, Math.abs(angleRef.current) * 0.15)
      }

      targetTiltX = Math.max(-12, Math.min(12, targetTiltX))
      targetTiltY = Math.max(-15, Math.min(15, targetTiltY))

      tiltRef.current.x += (targetTiltX - tiltRef.current.x) * 0.15
      tiltRef.current.y += (targetTiltY - tiltRef.current.y) * 0.15

      // Dynamic soft shadow
      const shadowX = angleRef.current * 0.6 + tiltRef.current.y * 0.4
      const shadowY = 22 + Math.abs(angleRef.current) * 0.25
      const shadowBlur = 35 + Math.abs(angleRef.current) * 0.35

      // Gloss highlight
      let targetGlossX = 50
      let targetGlossY = 30
      if (isDraggingRef.current) {
        targetGlossX = 50 + pointerNormRef.current.x * 35
        targetGlossY = 40 + pointerNormRef.current.y * 35
      } else {
        targetGlossX = 50 + angleRef.current * 0.4
        targetGlossY = 35
      }

      glossPosRef.current.x += (targetGlossX - glossPosRef.current.x) * 0.12
      glossPosRef.current.y += (targetGlossY - glossPosRef.current.y) * 0.12

      // Apply transforms directly
      if (pendulumRef.current) {
        pendulumRef.current.style.transform = `rotate(${angleRef.current.toFixed(2)}deg)`
      }
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltRef.current.x.toFixed(2)}deg) rotateY(${tiltRef.current.y.toFixed(2)}deg)`
        cardRef.current.style.boxShadow = `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px ${shadowBlur.toFixed(1)}px rgba(0, 0, 0, 0.55), 0 3px 8px rgba(0, 0, 0, 0.35)`
      }
      if (glossRef.current) {
        glossRef.current.style.background = `radial-gradient(circle at ${glossPosRef.current.x.toFixed(1)}% ${glossPosRef.current.y.toFixed(1)}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.1) 38%, transparent 65%)`
      }

      animId = requestAnimationFrame(tick)
    }

    lastTimeRef.current = performance.now()
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="hero-visual id-badge-stage" ref={stageRef}>
      <div className="id-badge-scaler" ref={scalerRef}>
        <div
          ref={pendulumRef}
          className={`id-badge-pendulum ${isDragging ? 'is-dragging' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onLostPointerCapture={handlePointerEnd}
          role="region"
          aria-label="Interactive 3D Hanging ID Badge"
        >
          {/* Lanyard Strap */}
          <div className="badge-strap">
            <div className="badge-strap-track">
              <span className="strap-text">ERICK JAMES RUBIN</span>
              <span className="strap-sep">◆</span>
              <span className="strap-text">ERICK JAMES RUBIN</span>
              <span className="strap-sep">◆</span>
              <span className="strap-text">ERICK JAMES RUBIN</span>
            </div>
          </div>

          {/* Metal Clip & Ring Hardware */}
          <div className="badge-hardware">
            <div className="badge-clip">
              <div className="badge-clip-groove" />
            </div>
            <div className="badge-ring" />
          </div>

          {/* Badge Card Button-like Element */}
          <div
            ref={cardRef}
            className="id-badge-card"
            role="button"
            tabIndex={0}
            aria-label="Flip ID badge"
            aria-pressed={isFlipped}
            onKeyDown={handleKeyDown}
          >
            {/* Flip Inner Wrapper */}
            <div
              className={`badge-flip-wrapper ${isFlipped ? 'is-flipped' : ''}`}
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* ── FRONT FACE ── */}
              <div className="badge-face badge-face-front">
                {/* Glossy Highlight Overlay */}
                <div ref={glossRef} className="badge-gloss-overlay" />

                {/* Punched Slot */}
                <div className="badge-punched-slot" />

                {/* Card Content Area */}
                <div className="badge-card-content">
                  {/* Header: JUNIOR tag & DEVELOPER */}
                  <div className="badge-header-row">
                    <span className="badge-tag-junior">JUNIOR</span>
                    <span className="badge-school-meta">BSIT · NBSC</span>
                  </div>
                  <h2 className="badge-title-dev">DEVELOPER</h2>

                  {/* Photo Frame */}
                  <div className="badge-photo-frame">
                    <img
                      src={profileImg}
                      alt="Erick James Rubin"
                      className="badge-photo-img"
                      draggable={false}
                    />
                  </div>

                  {/* White Name Plate */}
                  <div className="badge-nameplate">
                    <div className="badge-nameplate-text">ERICK JAMES RUBIN</div>
                    <div className="badge-nameplate-role">FULL-STACK &amp; IOT</div>
                  </div>

                  {/* Bottom Bar with PORTFOLIO */}
                  <div className="badge-bottom-bar">
                    <span className="badge-bar-portfolio">PORTFOLIO</span>
                    <div className="badge-bar-right">
                      <span className="badge-barcode">||| | || ||| | ||</span>
                      <span className="badge-bar-year">2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── BACK FACE ── */}
              <div className="badge-face badge-face-back">
                {/* Glossy Highlight Overlay */}
                <div className="badge-gloss-overlay" />

                {/* Punched Slot */}
                <div className="badge-punched-slot" />

                {/* Thin Inner Dark Frame */}
                <div className="badge-back-inner-frame">
                  {/* Top Row: Bold Tilted SCAN HERE with Stripes & NBSC */}
                  <div className="badge-back-top-row">
                    <div className="badge-back-scan-group">
                      <span className="badge-back-scan-title">SCAN HERE</span>
                      <div className="badge-back-stripes" />
                    </div>
                    <span className="badge-back-nbsc">NBSC</span>
                  </div>

                  {/* Center Area: Dark Rounded Panel & Right Edge Vertical Text */}
                  <div className="badge-back-mid-row">
                    <div className="badge-back-panel">
                      <div className="badge-back-panel-title">CONNECT WITH ME</div>
                      <div className="badge-back-panel-sub">SOCIAL MEDIA</div>
                      <div className="badge-back-qr-box">
                        <img
                          src={qrImg}
                          alt="Connect QR Code"
                          className="badge-back-qr-img"
                          draggable={false}
                        />
                      </div>
                    </div>
                    <div className="badge-back-vtext-wrap">
                      <span className="badge-back-vtext">INFORMATION TECHNOLOGY</span>
                    </div>
                  </div>

                  {/* Bottom: Dark Name Label and Junior Developer between thin lines */}
                  <div className="badge-back-bottom">
                    <div className="badge-back-name-label">ERICK JAMES RUBIN</div>
                    <div className="badge-back-role-line-wrap">
                      <span className="badge-back-role-line" />
                      <span className="badge-back-role-text">Junior Developer</span>
                      <span className="badge-back-role-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
