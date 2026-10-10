#!/bin/bash
# Fetches SourceForge download stats and writes them to stats.txt
set -euo pipefail

START_DATE="2020-01-01"
END_DATE="$(date -u +%Y-%m-%d)"
OUT="stats.txt"

echo "Fetching SourceForge stats ${START_DATE} → ${END_DATE}"
curl -sS "https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=${START_DATE}&end_date=${END_DATE}" \
  | python3 -c 'import sys, json; data = json.load(sys.stdin); json.dump(data, open("'"$OUT"'", "w"), indent=2)'

echo "Wrote $(wc -c < "$OUT") bytes to $OUT"
python3 -c 'import json; d = json.load(open("'"$OUT"'")); print("Total:", d["total"], "| Updated:", d["stats_updated"])'
