#!/usr/bin/env bash

set -eoux pipefail

rm -rf examples/output
mkdir examples/output

printf "$ examples/queryFromPage.js\n\n" > examples/output/queryFromPage.console
node examples/queryFromPage.js >> examples/output/queryFromPage.console
