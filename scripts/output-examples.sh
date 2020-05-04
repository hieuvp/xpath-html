#!/usr/bin/env bash

set -eou pipefail

readonly EXAMPLE_PATH="examples"
readonly OUTPUT_PATH="output"

readonly REGEX="^${EXAMPLE_PATH}\/(.+)\.js$"

FILENAMES=$(
  git ls-files \
    | grep -E "$REGEX" \
    | sed -E "s/${REGEX}/\1/g"
)

readarray -t FILENAMES < <(printf "%s" "$FILENAMES")
declare -ra FILENAMES

rm -rf "$OUTPUT_PATH" && mkdir "$OUTPUT_PATH"

run() {
  local -r filename=$1
  local -r filepath="${EXAMPLE_PATH}/${filename}.js"

  printf "\e[33mProducing output: %s\e[0m\n" "$filepath"

  node "$filepath" > "${OUTPUT_PATH}/${filename}.txt"
}

for filename in "${FILENAMES[@]}"; do
  run "$filename"
done
