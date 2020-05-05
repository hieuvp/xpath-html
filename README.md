# XPath HTML

[![CI](https://github.com/hieuvp/xpath-html/workflows/CI/badge.svg?branch=master)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3ACI+branch%3Amaster)
[![Release](https://github.com/hieuvp/xpath-html/workflows/release/badge.svg)](https://github.com/hieuvp/xpath-html/actions?query=workflow%3Arelease)
[![NPM](https://img.shields.io/npm/v/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)
[![Downloads](https://img.shields.io/npm/dm/xpath-html.svg)](https://www.npmjs.com/package/xpath-html)

<br />

**XPath** stands for **XML Path Language**.<br />
It provides a flexible **non-XML syntax** to address (point to) different parts of an **XML document**.

<br />

> With the [**XPath HTML**](#xpath-html),
> this will enable us to use such a powerful tool,
> navigating through the **HTML DOM** by **XPath expression**.

<br />

If you want to learn more about **XPath** and
know how to use different **XPath expression** for finding complex or dynamic elements,
take a visit to this concise tutorial
[here](https://github.com/hieuvp/learning-automation-tools/blob/master/xpath/README.md).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usages](#usages)
  - [Hello XPath from HTML World](#hello-xpath-from-html-world)
  - [`fromPageSource(html).findElement(expression)`](#frompagesourcehtmlfindelementexpression)
  - [`fromPageSource(html).findElements(expression)`](#frompagesourcehtmlfindelementsexpression)
  - [`fromNode(xhtml).findElement(expression)`](#fromnodexhtmlfindelementexpression)
  - [`fromNode(xhtml).findElements(expression)`](#fromnodexhtmlfindelementsexpression)
  - [`node.getTagName()`](#nodegettagname)
  - [`node.getText()`](#nodegettext)
  - [`node.getAttribute(name)`](#nodegetattributename)
- [Dependencies](#dependencies)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

[`xpath-html`](https://www.npmjs.com/package/xpath-html) is available as a package on [NPM](https://www.npmjs.com/),
open up a **Terminal** and enter the following command:

```shell script
npm install --save xpath-html
```

## Usages

### Hello XPath from HTML World

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/hello.js) -->
<!-- The below code snippet is automatically added from examples/hello.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

// Assuming you have an html file locally,
// Here is the content that I scraped from www.shopback.sg
const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");

// Don't worry about the input much,
// you are able to use the HTML response of an HTTP request,
// as long as the argument is a string type, everything should be fine.
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matched tag name is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
```

<!-- AUTO-GENERATED-CONTENT:END -->

```shell script
# A fast way to download .html file above
$ curl https://www.shopback.sg -o shopback.html

# Or from my GitHub examples
$ curl -O https://raw.githubusercontent.com/hieuvp/xpath-html/master/examples/shopback.html
```

Bang 💥 **Output** should be something looks like:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/hello.txt) -->
<!-- The below code snippet is automatically added from output/hello.txt -->

```txt
The matched tag name is "div"
Your full text is "Made with love by"
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

It is understandable, right? <br />
Now, you can scroll down the APIs below and diving into details.

<br />

### `fromPageSource(html).findElement(expression)`

> Locate an element on a page,
> the returned node is a representation of the underlying DOM.

**Arguments:**

| Name         | Type     | Description                |
| ------------ | -------- | -------------------------- |
| `html`       | `string` | Input HTML page's source   |
| `expression` | `string` | The given XPath expression |

**Returns:** `Node`

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

> Search for multiple elements on a page.

**Arguments:**

| Name         | Type     | Description                |
| ------------ | -------- | -------------------------- |
| `html`       | `string` | Input HTML page's source   |
| `expression` | `string` | The given XPath expression |

**Returns:** `Array<Node>`

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

console.log("Number of nodes found:", nodes.length);
console.log("nodes[0]:", nodes[0].toString());
console.log("nodes[1]:", nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElements.txt -->

```txt
Number of nodes found: 158
nodes[0]: <img src="https://cloud.shopback.com/raw/upload/static/images/navbar/sb-logo.png" xmlns="http://www.w3.org/1999/xhtml"/>
nodes[1]: <img src="https://cloud.shopback.com/raw/upload/static/images/navbar/desktop/icon-raf.svg" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `fromNode(xhtml).findElement(expression)`

> Select an element against an XHTML format.<br />
> Similar to [`fromPageSource(html).findElement(expression)`](#frompagesourcehtmlfindelementexpression),
> but it is for a subset of an `html` page this time.

**Arguments:**

| Name         | Type               | Description                                                                           |
| ------------ | ------------------ | ------------------------------------------------------------------------------------- |
| `xhtml`      | `Node` or `string` | Either a **returned node** from a query<br />or an **xhtml string** with a good shape |
| `expression` | `string`           | The given XPath expression                                                            |

**Returns:** `Node`

**Notes:**

- The input `xhtml` must have a namespace of `xmlns="http://www.w3.org/1999/xhtml"` <br />
  e.g. `<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>`

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

### `fromNode(xhtml).findElements(expression)`

> Select multiple elements against an XHTML format.<br />
> Same as [`fromPageSource(html).findElements(expression)`](#frompagesourcehtmlfindelementsexpression),
> however it is being used for querying from a part of an `html`.

**Arguments:**

| Name         | Type               | Description                                                                           |
| ------------ | ------------------ | ------------------------------------------------------------------------------------- |
| `xhtml`      | `Node` or `string` | Either a **returned node** from a query<br />or an **xhtml string** with a good shape |
| `expression` | `string`           | The given XPath expression                                                            |

**Returns:** `Array<Node>`

**Notes:**

- The input `xhtml` must have a namespace of `xmlns="http://www.w3.org/1999/xhtml"` <br />
  e.g. `<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElements.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const nodes = xpath.fromNode(group).findElements("//img[contains(@src,'shopily')]");

console.log("Number of nodes found:", nodes.length);
console.log("nodes[0]:", nodes[0].toString());
console.log("nodes[1]:", nodes[1].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElements.txt -->

```txt
Number of nodes found: 2
nodes[0]: <img class="store-logo" src="https://shopily-sg.s3.amazonaws.com/uploads/stores/504/504_logo_200c4121.png" alt="zChocolat Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
nodes[1]: <img class="store-logo" src="https://shopily-sg.s3.amazonaws.com/uploads/stores/2498/2498_logo_81f0a24d.png" alt="Bed Bath &amp; Beyond Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>
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

console.log("Single node's tag name:", node.getTagName());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log("First nodes[0] tag name:", nodes[0].getTagName());
console.log("Second nodes[1] tag name:", nodes[1].getTagName());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/node.getTagName.txt) -->
<!-- The below code snippet is automatically added from output/node.getTagName.txt -->

```txt
Single node's tag name: div
First nodes[0] tag name: img
Second nodes[1] tag name: img
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `node.getText()`

> Get the visible **innerText** of the node.

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

console.log("Text of the node:", node.getText());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//div[@id='home-page-container']//*[@class='title-text']");

console.log("Text of nodes[0]:", nodes[0].getText());
console.log("Text of nodes[1]:", nodes[1].getText());
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/node.getText.txt) -->
<!-- The below code snippet is automatically added from output/node.getText.txt -->

```txt
Text of the node: Made with love by
Text of nodes[0]: Up to 10.0% Cash Rewards
Text of nodes[1]: Up to 7.0% Cashback
```

<!-- AUTO-GENERATED-CONTENT:END -->

<br />

### `node.getAttribute(name)`

> Retrieve the current value of the given attribute of this node.

**Arguments:**

| Name   | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| `name` | `string` | The name of the attribute to query |

**Returns:** `string`

**Example**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/node.getAttribute.js) -->
<!-- The below code snippet is automatically added from examples/node.getAttribute.js -->

```js
const fs = require("fs");
const xpath = require("xpath-html");

const html = fs.readFileSync(`${__dirname}/shopback.html`, "utf8");
const node = xpath.fromPageSource(html).findElement("//a[text()='View All Popular Stores']");

console.log("The href value is:", node.getAttribute("href"));
```

<!-- AUTO-GENERATED-CONTENT:END -->

**Result**:

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/node.getAttribute.txt) -->
<!-- The below code snippet is automatically added from output/node.getAttribute.txt -->

```txt
The href value is: /all-stores
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

Special thanks to all contributors of these libraries
which are the foundation of what `xpath-html` was built upon.

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT

Made with ❤ from [ShopBack](https://www.shopback.com/).
