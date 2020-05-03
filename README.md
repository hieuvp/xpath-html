# XPath HTML

[![CI](https://github.com/hieuvp/xpath-html/workflows/CI/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ACI)
[![Release](https://github.com/hieuvp/xpath-html/workflows/Release/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ARelease)
[![Version](https://img.shields.io/npm/v/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)
[![NPM](https://img.shields.io/npm/dm/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)

> Easily use XPath to locate any element in an HTML DOM page.

<br />

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

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromPageSource.findElement.js) -->
<!-- The below code snippet is automatically added from examples/fromPageSource.findElement.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElement.txt -->

```txt
<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `fromPageSource(html).findElements(expression)`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromPageSource.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromPageSource.findElements.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log("nodes.length =", nodes.length);

console.log(nodes[0].toString());
console.log(nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElements.txt -->

```txt
nodes.length = 158
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/sb-logo.png" xmlns="http://www.w3.org/1999/xhtml"/>
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/desktop/icon-raf.svg" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `fromNode(xml).findElement(expression)`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElement.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElement.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const node = xpath.fromNode(group).findElement("//a[@href='/aliexpress']");
console.log(node.toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElement.txt -->

```txt
<a class="store-logo-wrapper" href="/aliexpress" title="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"><img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes"/></a>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `fromNode(xml).findElements(expression)`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElements.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const nodes = xpath.fromNode(group).findElements("//img[@class='store-logo']");

console.log("length =", nodes.length);

console.log(nodes[0].toString());
console.log(nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElements.txt -->

```txt
length = 102
<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `getTagName()`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/getTagName.js) -->
<!-- The below code snippet is automatically added from examples/getTagName.js -->

```js
// One element
// Multiple elements

const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getTagName());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log(nodes[0].getTagName());
console.log(nodes[1].getTagName());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/getTagName.txt) -->
<!-- The below code snippet is automatically added from output/getTagName.txt -->

```txt
div
img
img
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `getText()`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/getText.js) -->
<!-- The below code snippet is automatically added from examples/getText.js -->

```js
const xpath = require("xpath-html");
const fs = require("fs");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "UTF-8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getText());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log(nodes[0].getText());
console.log(nodes[1].getText());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/getText.txt) -->
<!-- The below code snippet is automatically added from output/getText.txt -->

```txt
Made with love by
undefined
undefined
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT
