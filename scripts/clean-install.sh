#!/usr/bin/env bash

set -eoux pipefail

run() {
  rm -rf node_modules
  rm -f package-lock.json

  npm install
}

(cd . && run)
(cd examples && run)
