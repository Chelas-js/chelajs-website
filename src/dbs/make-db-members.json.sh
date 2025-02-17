#!/bin/sh

set -e

members_json_file=$(dirname $(realpath $0))/db-members.json
csv_file=$1

if [ ! -f "$csv_file" ]; then
  echo "Error: CSV file not found. $csv_file" 1>&2
  exit 1
fi

cat "$members_json_file" | jq --argjson new_records "$(yq "$csv_file" -p=csv -o json)" -r '
  .
  | . as $doc
  | (
    $new_records 
    | map(
      {
        name: .name,
        email: .email,
        social_media: {
          linkedin: .["¿Cuál es tu perfil de LinkedIn?"]
        }
      }
      | { key: .email, value: . }
    )
  ) as $records
  | .members = (
    ($records | from_entries) + (.members | map({ key: .email, value: . }) | from_entries)
    | to_entries
    | map(.value)
  )
  | .
' > "$members_json_file"
