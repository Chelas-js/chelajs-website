#!/bin/sh

set -e

promp_file_key=$1

env_path=$(dirname $(realpath $0))/.env
promp_file=$(dirname $(realpath $0))/$promp_file_key
res_file=$promp_file.res.json
promp_md_file=$promp_file.prompt.md
default_model="gemini-2.0-flash-thinking-exp-01-21"
model="$default_model"

if [ ! -f "$promp_file" ]; then
  echo "Error: prompt file not found. $promp_file" 1>&2
  exit 1
fi

if [ -f $env_path ]; then
  . $env_path
fi

# if variable GEMINI_API_KEY not existe throw error
if [ -z "$GEMINI_API_KEY" ]; then
  echo "Error: GEMINI_API_KEY environment variable not set." 1>&2
  exit 1
fi

if [ ! -f "$promp_file" ]; then
  echo "Error: prompt file not found. $promp_file" 1>&2
  exit 1
fi

function __clean() {
  echo "Cleaning up..."
  rm -rf "$res_file"
}

function __info_model() {
  model=$(cat $promp_file | jq --arg default_model "$default_model" '.model // $default_model' -r)

  echo "Model: $model"
}

function __pull() {
  curl \
    -X POST https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=${GEMINI_API_KEY} \
    -H 'Content-Type: application/json' \
    -d "$(cat $promp_file)" > "$res_file"
}

function __update_prompt() {
  if [ ! -f "$res_file" ]; then
    echo "Error: response file not found. $res_file" 1>&2
    exit 1
  fi

  echo "Updating prompt..."

  new_contents="$(cat $res_file | jq '.candidates | map( .content )')"

  jq -n --argjson new_contents "$new_contents" --argjson promp_file "$(cat $promp_file)" '

    $promp_file
    | $promp_file.contents += $new_contents // []
    | .

  ' > "$promp_file"
}

function __make_prompt_md() {
  cat "$promp_file" | jq -r \
    '
        .contents
        | map(
            "\n---\n\n**👤 role: " + .role + "**\n\n---\n---\n---\n\n"
            + (
                .parts | map( .text ) | join("\n\n---\n---\n\n\n")
            )
            + "\n\n"
        )
        | join( "" )
    ' > "$promp_md_file"
}

for arg in $@; do
  if [ "$arg" = "--clean" ]; then
    __clean
    exit 0
  fi
  if [ "$arg" = "--pull" ]; then
    __pull
    exit 0
  fi
  if [ "$arg" = "--make-prompt-md" ]; then
    __make_prompt_md
    exit 0
  fi
  if [ "$arg" = "--info-model" ]; then
    __info_model
    exit 0
  fi
done

__info_model
__pull
__update_prompt
__make_prompt_md
exit 0
