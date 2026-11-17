#!/usr/bin/env bash
# Creates 22 small commits, all dated 2026-09-30T12:00:00.
# Each commit appends one line to log.txt.
set -euo pipefail

DATE="2026-09-30T12:00:00"
COUNT=22

cd "$(dirname "$0")"

for n in $(seq 1 "$COUNT"); do
  echo "log entry $n" >> log.txt
  git add log.txt
  GIT_AUTHOR_DATE="$DATE" GIT_COMMITTER_DATE="$DATE" \
    git commit --date="$DATE" -m "update log $n"
done

echo "Created $COUNT commits dated $DATE."
