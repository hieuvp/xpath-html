#!/usr/bin/env bash

set -eoux pipefail

rm -rf examples/output
mkdir examples/output

node examples/queryFromPage.js >> examples/output/queryFromPage.console
