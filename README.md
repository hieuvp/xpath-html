# XPath HTML

[![CI](https://github.com/hieuvp/xpath-html/workflows/CI/badge.svg?branch=master)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ACI+branch%3Amaster)
[![Release](https://github.com/hieuvp/xpath-html/workflows/release/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3Arelease)
[![Version](https://img.shields.io/npm/v/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)
[![NPM](https://img.shields.io/npm/dm/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)

> Easily use XPath to locate any element in an HTML DOM page.

**XPath** stands for **XML Path Language**.
It uses a non-XML syntax to provide a flexible way
of addressing (pointing to) different parts of an XML document.

With **XPath HTML**,
it enabled us this powerful tool to navigate through the HTML DOM using **XPath Expression**.

If you want to learn more about the XPath
and how to use different XPath expression for finding the complex or dynamic elements.
Checkout this concise tutorial
[here](https://github.com/hieuvp/learning-automation-tools/blob/master/xpath/README.md).

<br />

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usages](#usages)
  - [Hello XPath for HTML](#hello-xpath-for-html)
  - [`fromPageSource(html).findElement(expression)`](#frompagesourcehtmlfindelementexpression)
  - [`fromPageSource(html).findElements(expression)`](#frompagesourcehtmlfindelementsexpression)
  - [`fromNode(xml).findElement(expression)`](#fromnodexmlfindelementexpression)
  - [`fromNode(xml).findElements(expression)`](#fromnodexmlfindelementsexpression)
  - [`node.getTagName()`](#nodegettagname)
  - [`node.getText()`](#nodegettext)
- [Dependencies](#dependencies)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

[`xpath-html`](https://www.npmjs.com/package/xpath-html) is available as a package on [NPM](https://www.npmjs.com/),
open up a **Terminal** and run the following command:

```shell script
npm install --save xpath-html
```

## Usages

`xpath-html` supported queries against html format as well as xml,
that results from...
Sub section from previous results.
Extensive APIs

### Hello XPath for HTML

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/hello.js) -->
<!-- The below code snippet is automatically added from examples/hello.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

// Assuming you have an html file locally,
// here the content I scraped from www.shopback.sg
const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");

// Don't worry much about the input,
// you could be able to use an HTML response from an HTTP request
// As long as the argument is a string type, everything should be fine.
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matching tag is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
```

<!-- AUTO-GENERATED-CONTENT:END -->

```shell script
# The quickest way to download the file above
$ curl https://www.shopback.sg -o shopback.html

# Or even from GitHub
$ curl -O https://raw.githubusercontent.com/hieuvp/xpath-html/master/examples/shopback.html
```

Bang 💥 the output should be something looks like:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/hello.txt) -->
<!-- The below code snippet is automatically added from output/hello.txt -->

```txt
The matching tag is "div"
Your full text is "Made with love by"
```

<!-- AUTO-GENERATED-CONTENT:END -->

It is very simple, right?
Now, you can scroll down to the APIs below and diving into details.

<br />

### `fromPageSource(html).findElement(expression)`

> Making XPath query against an HTML document.
> Locates an element on the page.
> If the element cannot be found, a error.NoSuchElementError will be returned by the driver.
> Retrieves the current page's source.
> The returned source is a representation of the underlying DOM:
> do not expect it to be formatted
> or escaped in the same way as the raw response sent from the web server.

```ts
type SelectedValue = Node | Attr | string | number | boolean;
interface XPathSelect {
  (expression: string, node?: Node): Array<SelectedValue>;
  (expression: string, node: Node, single: true): SelectedValue;
}
```

**Arguments:**

| Name         | Type     | Description          |
| ------------ | -------- | -------------------- |
| `html`       | `string` | Input HTML string    |
| `expression` | `string` | The XPath expression |

**Returns:** `SelectedElement`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromPageSource.findElement.js) -->
<!-- The below code snippet is automatically added from examples/fromPageSource.findElement.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElement.txt -->

```txt
<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `fromPageSource(html).findElements(expression)`

> Search for multiple elements on the page.
> Refer to the documentation on #findElement(by)
> for information on element locator strategies.

**Arguments:**

| Name         | Type     | Description          |
| ------------ | -------- | -------------------- |
| `html`       | `string` | Input HTML string    |
| `expression` | `string` | The XPath expression |

**Returns:** `Array<SelectedElement>`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromPageSource.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromPageSource.findElements.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log("nodes.length =", nodes.length);

console.log(nodes[0].toString());
console.log(nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElements.txt -->

```txt
nodes.length = 158
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/sb-logo.png" xmlns="http://www.w3.org/1999/xhtml"/>
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/desktop/icon-raf.svg" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `fromNode(xml).findElement(expression)`

> Making XPath query against an XML node.

**Arguments:**

| Param                 | Type                                       | Description                                                                                                                            |
| --------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `xml` fragmentContext | `SelectedElement` or `string`              | Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's \`innerHTML\` property. |
| `expression` options  | [ParserOptions](options/parser-options.md) | Parsing options.                                                                                                                       |

**Returns:** `SelectedElement`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElement.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElement.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const node = xpath.fromNode(group).findElement("//a[@href='/aliexpress']");
console.log(node.toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElement.txt -->

```txt
<a class="store-logo-wrapper" href="/aliexpress" title="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"><img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes"/></a>
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `fromNode(xml).findElements(expression)`

**Arguments:**
**Arguments:**

| Param                      | Type                                       | Description                                                                                                                            |
| -------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `Optional` fragmentContext | Element                                    | Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's \`innerHTML\` property. |
| html                       | `string`                                   | Input HTML fragment string.                                                                                                            |
| `Optional` options         | [ParserOptions](options/parser-options.md) | Parsing options.                                                                                                                       |

**Returns:** `Array<SelectedElement>`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElements.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const nodes = xpath.fromNode(group).findElements("//img[contains(@src,'shopily')]");

console.log("length =", nodes.length);

console.log(nodes[0].toString());
console.log(nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElements.txt -->

```txt
length = 2
<img class="store-logo" src="https://shopily-sg.s3.amazonaws.com/uploads/stores/504/504_logo_200c4121.png" alt="zChocolat Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
<img class="store-logo" src="https://shopily-sg.s3.amazonaws.com/uploads/stores/2498/2498_logo_81f0a24d.png" alt="Bed Bath &amp; Beyond Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `node.getTagName()`

> Retrieve the node's tag name.

**Arguments:** None

**Returns:** `string`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/node.getTagName.js) -->
<!-- The below code snippet is automatically added from examples/node.getTagName.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getTagName());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log(nodes[0].getTagName());
console.log(nodes[1].getTagName());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/node.getTagName.txt) -->
<!-- The below code snippet is automatically added from output/node.getTagName.txt -->

```txt
div
img
img
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `node.getText()`

> Get the visible innerText of this node.

**Arguments:** None

**Returns:** `string`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/node.getText.js) -->
<!-- The below code snippet is automatically added from examples/node.getText.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getText());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//div[@id='home-page-container']//*[@class='title-text']");

console.log(nodes[0].getText());
console.log(nodes[1].getText());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/node.getText.txt) -->
<!-- The below code snippet is automatically added from output/node.getText.txt -->

```txt
Made with love by
Up to 10.0% Cash Rewards
Up to 7.0% Cashback
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

Special thanks to all contributors of these libraries
which are the foundation of which `xpath-html` was built upon.

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT

Made with ❤ from [ShopBack](https://www.shopback.com/)
