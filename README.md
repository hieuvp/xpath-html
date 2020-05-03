# XPath HTML

[![CI](https://github.com/hieuvp/xpath-html/workflows/CI/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ACI)
[![Release](https://github.com/hieuvp/xpath-html/workflows/Release/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ARelease)
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
  - [`getText`](#gettext)
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

```ts
type SelectedValue = Node | Attr | string | number | boolean;
interface XPathSelect {
  (expression: string, node?: Node): Array<SelectedValue>;
  (expression: string, node: Node, single: true): SelectedValue;
}
```

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/queryFromPage.js) -->
<!-- The below code snippet is automatically added from examples/queryFromPage.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const nodes = xpath.queryFromPage("//*[text()='Made with love by']", html);

console.log(nodes.toString());

console.log(`${nodes[0].localName}: ${nodes[0].firstChild.data}`);
console.log(`Node: ${nodes[0].toString()}`);
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/output/queryFromPage.console) -->
<!-- The below code snippet is automatically added from examples/output/queryFromPage.console -->

```console
<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>
div: Made with love by
Node: <div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `queryFromNode(expression, node, single)`

> Making XPath query against an XML node.

**Parameters:**

**Returns:**

**Example**:

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

### `getText`

## Dependencies

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT
