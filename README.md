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
  - [`fromPageSource(html).findElement(expression)`](#frompagesourcehtmlfindelementexpression)
  - [`fromPageSource(html).findElements(expression)`](#frompagesourcehtmlfindelementsexpression)
  - [`fromNode(xml).findElement(expression)`](#fromnodexmlfindelementexpression)
  - [`fromNode(xml).findElements(expression)`](#fromnodexmlfindelementsexpression)
  - [`getTagName()`](#gettagname)
  - [`getText()`](#gettext)
- [Dependencies](#dependencies)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

[`xpath-html`](https://www.npmjs.com/package/xpath-html) is available as a package on [NPM](https://www.npmjs.com/):

```shell script
npm install --save xpath-html
```

## Usages

### `fromPageSource(html).findElement(expression)`

> Making XPath query against an HTML document.

```ts
type SelectedValue = Node | Attr | string | number | boolean;
interface XPathSelect {
  (expression: string, node?: Node): Array<SelectedValue>;
  (expression: string, node: Node, single: true): SelectedValue;
}
```

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

fromPageSource.findElement.js

### `fromPageSource(html).findElements(expression)`

fromPageSource.findElements.js

### `fromNode(xml).findElement(expression)`

fromNode.findElement.js

### `fromNode(xml).findElements(expression)`

fromNode.findElements.js

### `getTagName()`

getTagName.js

### `getText()`

getText.js

## Dependencies

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT
