# XPath HTML

[![CI](https://github.com/hieuvp/xpath-html/workflows/CI/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ACI)
[![Package](https://github.com/hieuvp/xpath-html/workflows/Package/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3APackage)
[![Version](https://img.shields.io/npm/v/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)
[![NPM](https://img.shields.io/npm/dm/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)

> Easily use XPath to locate any element in an HTML DOM page.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usages](#usages)
  - [`queryFromPage(expression, pageSource, single)`](#queryfrompageexpression-pagesource-single)
  - [`queryFromNode(expression, node, single)`](#queryfromnodeexpression-node-single)
- [Dependencies](#dependencies)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

[`xpath-html`](https://www.npmjs.com/package/xpath-html) is available as a package on [NPM](https://www.npmjs.com/):

```shell script
npm install --save xpath-html
```

## Usages

### `queryFromPage(expression, pageSource, single)`

> Making XPath query against an HTML document.

**Parameters:**

| Param                      | Type                                       | Description                                                                                                                            |
| -------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `Optional` fragmentContext | Element                                    | Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's \`innerHTML\` property. |
| html                       | `string`                                   | Input HTML fragment string.                                                                                                            |
| `Optional` options         | [ParserOptions](options/parser-options.md) | Parsing options.                                                                                                                       |

**Returns:** DocumentFragment

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/queryFromNode.js) -->
<!-- The below code snippet is automatically added from examples/queryFromNode.js -->

```js
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `queryFromNode(expression, node, single)`

> Making XPath query against an XML node.

**Parameters:**

**Returns:**

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/queryFromPage.js) -->
<!-- The below code snippet is automatically added from examples/queryFromPage.js -->

```js
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT
