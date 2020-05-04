#!/usr/bin/env bash

set -eou pipefail

readonly EXAMPLE_DIR="examples"
readonly OUTPUT_DIR="output"

readonly REGEX="^${EXAMPLE_DIR}\/(.+)\.js$"

FILENAMES=$(
  git ls-files \
    | grep -E "$REGEX" \
    | sed -E "s/${REGEX}/\1/g"
)

readarray -t FILENAMES < <(printf "%s" "$FILENAMES")
declare -ra FILENAMES

rm -rf "$OUTPUT_DIR" && mkdir "$OUTPUT_DIR"

run() {
  local -r filename=$1
  local -r filepath="${EXAMPLE_DIR}/${filename}.js"

  printf "\e[33mProducing output from %s\e[0m\n" "$filepath"

  node "$filepath" > "${OUTPUT_DIR}/${filename}.txt"
}

for filename in "${FILENAMES[@]}"; do
  run "$filename"
done
