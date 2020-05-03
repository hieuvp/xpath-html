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

console.log(`${node.tagName}: ${node.firstChild.data}`);
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElement.txt -->

```txt
<div xmlns="http://www.w3.org/1999/xhtml">Made with love by</div>
div: Made with love by
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

console.log(nodes.toString());
console.log("nodes.length =", nodes.length);

console.log(nodes[0].toString());
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromPageSource.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromPageSource.findElements.txt -->

```txt
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/sb-logo.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/desktop/icon-raf.svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="img-icon" src="https://cloud.shopback.com/raw/upload/static/images/navbar/hiwEducationBanner/merchant-icon.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="img-icon" src="https://cloud.shopback.com/raw/upload/static/images/navbar/hiwEducationBanner/coin-icon.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="img-icon" src="https://cloud.shopback.com/raw/upload/static/images/navbar/hiwEducationBanner/wallet-icon.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="placeholder" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/16122/hero-banner_dt_a225eb33.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="How it works" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/16122/hero-banner_dt_a225eb33.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="visa wow weekend" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20715/hero-banner_dt_e5e0ec39.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Dyson_Upsize_1 May-4 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20717/hero-banner_dt_21ecc72a.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="sgpaysitforward" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20675/hero-banner_dt_40d12f1f.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="adidas 17% upsized cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20722/hero-banner_dt_b3c17f1d.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Flower Advisor_Upsize_1 May-13 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20718/hero-banner_dt_c338025f.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Sephora_Onsite_22 Apr-31 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20619/hero-banner_dt_de8a8b59.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Stay Home Essentials Up to 30% Cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20458/hero-banner_dt_2cc2162f.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="travelution up to 20% upsized cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20489/hero-banner_dt_abb4e346.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="RAF" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/18445/hero-banner_dt_757ae04c.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="placeholder" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/16122/hero-banner_mb_da4a327b.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="How it works" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/16122/hero-banner_mb_da4a327b.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="visa wow weekend" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20715/hero-banner_mb_82f5906c.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Dyson_Upsize_1 May-4 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20717/hero-banner_mb_65469a03.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="sgpaysitforward" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20675/hero-banner_mb_912c6bf4.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="adidas 17% upsized cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20722/hero-banner_mb_a0af1668.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Flower Advisor_Upsize_1 May-13 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20718/hero-banner_mb_506f48cb.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Sephora_Onsite_22 Apr-31 May 2020" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20619/hero-banner_mb_92e6b278.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Stay Home Essentials Up to 30% Cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20458/hero-banner_mb_c26258e1.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="travelution up to 20% upsized cashback" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/20489/hero-banner_mb_13374489.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="RAF" src="https://cloud.shopback.com/w_1336,f_auto,fl_lossy,q_auto,e_sharpen/sg-banner/18445/hero-banner_mb_34cc39bc.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-fire popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-burger popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/burger.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-plane popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/plane.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-laptop popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/laptop.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-tshirt popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/tshirt.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-lettuce popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/lettuce.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-lipstick popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/lipstick.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-couch popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/couch.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="sb-icon sb-icon-basketball popularStoreCategoryTabIcon" src="https://cloud.shopback.com/raw/upload/static/images/icon/core/basketball.svg" type="svg" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/318/318_logo_a567c6b3.png" alt="Booking.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1604/1604_logo_d3100176.png" alt="Airbnb Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/46/46_logo_5dce1684.jpg" alt="ASOS Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/838/838_logo_a97af45e.png" alt="Agoda Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/93/zalora-coupon-1.png" alt="ZALORA Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2663/2663_logo_4bf00681.png" alt="Adidas Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1816/1816_logo_0ef697bb.png" alt="Shopee Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/81/81_logo_b5e671a3.png" alt="Foodpanda Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2642/2642_logo_73f0fcc0.png" alt="Eatzi Gourmet Bakery Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2651/2651_logo_2923782e.png" alt="FoodLine Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2100/2100_logo_be23d682.JPG" alt="Stamford Catering Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2644/2644_logo_9cfbc9ef.png" alt="The Meat Club Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/546/herbspro-coupon.png" alt="HerbsPro Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2072/2072_logo_2c98746f.png" alt="Spizza Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2436/2436_logo_4b722b2a.png" alt="Foodsterr Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1816/1816_logo_0ef697bb.png" alt="Shopee Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2004/microsoft-coupon.jpg" alt="Microsoft Store Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1651/hp-coupon-1.png" alt="HP Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2659/2659_logo_fac1b072.png" alt="NordVPN Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1410/1410_logo_1f17bc8d.png" alt="Canon Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2656/2656_logo_62f11b31.png" alt="Sennheiser Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2729/2729_logo_f7a5294a.png" alt="JBL Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/46/46_logo_5dce1684.jpg" alt="ASOS Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/93/zalora-coupon-1.png" alt="ZALORA Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2663/2663_logo_4bf00681.png" alt="Adidas Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2687/2687_logo_e95267ee.jpeg" alt="Vestiaire Collective Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/901/901_logo_5d9c63f2.png" alt="Charles &amp; Keith Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2585/2585_logo_3b0154ca.png" alt="MATCHESFASHION Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1675/nap.png" alt="NET-A-PORTER Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/388/388_logo_92b50f13.png" alt="Shopbop Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1816/1816_logo_0ef697bb.png" alt="Shopee Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2650/2650_logo_d4600cd3.png" alt="Enfagrow Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2738/2738_logo_1503c8cb.png" alt="Amazin' Graze Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2702/2702_logo_97591669.png" alt="IRVINS Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/491/a1supplements-coupon-1.png" alt="A1Supplements.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/842/walgreens-coupon.png" alt="Walgreens Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/46/46_logo_5dce1684.jpg" alt="ASOS Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2736/2736_logo_ede4a6d2.png" alt="ColourPop Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2739/2739_logo_6792419b.jpg" alt="Watsons Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1565/1565_logo_e43df2b7.png" alt="Guardian Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1093/1093_logo_81b4c260.png" alt="Althea Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2625/2625_logo_01ae66f6.png" alt="Myprotein Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1025/1025_logo_cfd71f3d.png" alt="Sephora Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2013/lookfantastic-coupon.png" alt="Lookfantastic Singapore Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1339/sk-ii-coupon-.png" alt="SK-II Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png" alt="Taobao Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/49/49_logo_86958e96.png" alt="AliExpress Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1816/1816_logo_0ef697bb.png" alt="Shopee Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2697/2697_logo_bf4b1604.png" alt="Nespresso Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/685/685_logo_cd96ffd1.png" alt="HipVan Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2497/2497_logo_08f0ff0a.png" alt="Barnes &amp; Noble Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2620/2620_logo_6d05dc80.png" alt="Kohl's Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1207/flower-advisor-coupon.png" alt="Flower Advisor Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1291/1291_logo_969acab2.png" alt="Amazon SG Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1071/tmall-coupon.png" alt="Tmall Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/46/46_logo_5dce1684.jpg" alt="ASOS Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2663/2663_logo_4bf00681.png" alt="Adidas Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/808/808_logo_f5c73a2f.png" alt="Joe's New Balance Outlet Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/332/samsonite-coupon.png" alt="Samsonite Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2669/2669_logo_db5c69c9.png" alt="Sports Direct Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2494/2494_logo_9827d96b.png" alt="Finish Line Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1106/under-armour-coupon-.png" alt="Under Armour Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/318/318_logo_a567c6b3.png" alt="Booking.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1604/1604_logo_d3100176.png" alt="Airbnb Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/838/838_logo_a97af45e.png" alt="Agoda Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/271/271_logo_067c0db9.png" alt="Hotels.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/671/671_logo_13f09ba4.png" alt="Trip.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2627/2627_logo_95b0b223.png" alt="Rentalcars.com Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/432/432_logo_dd701df9.png" alt="Accor Live Limitless Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2634/2634_logo_8f17019d.png" alt="Viator Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2624/2624_logo_95aa5d14.png" alt="Luxury Escapes Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="store-logo" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/102/expedia-coupon-1.png" alt="Expedia Coupons &amp; Promo Codes" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="" class="deal-product" data-src="https://cloud.shopback.com/sg-static/deals/49780/norton-topdeal.jpg" height="auto" src="https://cloud.shopback.com/sg-static/deals/49780/norton-topdeal.jpg" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Canon Promotions &amp; Discounts" class="logo-img" data-src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1410/1410_logo_1f17bc8d.png" height="auto" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1410/1410_logo_1f17bc8d.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="" class="deal-product" data-src="https://cloud.shopback.com/sg-static/deals/48116/1406-canon-topdeals.png" height="auto" src="https://cloud.shopback.com/sg-static/deals/48116/1406-canon-topdeals.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="ZALORA Promotions &amp; Discounts" class="logo-img" data-src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/93/zalora-coupon-1.png" height="auto" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/93/zalora-coupon-1.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Cotton On Promotions &amp; Discounts" class="logo-img" data-src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1200/cotton-on-coupon-.png" height="auto" src="https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1200/cotton-on-coupon-.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="ShopBack eyes S-E Asia's US$60b e-commerce market" class="logo-img" src="https://cloud.shopback.com/press/logo/businesstimes.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Singapore start-up ShopBack pays you to shop online!" class="logo-img" src="https://cloud.shopback.com/press/logo/asianentrepreneur.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Shopback - The Online Version of the Great Singapore Sale? It's now here!" class="logo-img" src="https://cloud.shopback.com/press/logo/smartlocal.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Steady, Silent, And Deadly: Inside Singapore’s Hidden Gem Startup, ShopBack" class="logo-img" src="https://cloud.shopback.com/press/logo/vulcan.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Shopback gives you cashback for online shopping, and it just raised $600k from investors" class="logo-img" src="https://cloud.shopback.com/press/logo/techinasia.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Shopback secures $600k seed funding from East Ventures &amp; Accel-X" class="logo-img" src="https://cloud.shopback.com/press/logo/dealstreetasia.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Local start-up ShopBack offers cash back for e-purchases" class="logo-img" src="https://cloud.shopback.com/press/logo/straitstimes.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Technopreneur overcomes tough background to win Best Start-up award" class="logo-img" src="https://cloud.shopback.com/press/logo/newpaper.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Style scoop: Barbie x Sophia Webster, Peanuts x LeSportsac, Puma, ShopBack" class="logo-img" src="https://cloud.shopback.com/press/logo/today.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="Website offers cash back for e-purchases" class="logo-img" src="https://cloud.shopback.com/press/logo/asiaone.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="【新加坡】“六人行”要像马云称霸电子商务" class="logo-img" src="https://cloud.shopback.com/press/logo/lhzb.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img alt="'It's like a treasure hunt': Shoppers in Singapore gear up for Singles’ Day sale" class="logo-img" src="https://cloud.shopback.com/press/logo/channelnewsasia.png" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerSafetyIcon" src="https://cloud.shopback.com/raw/upload/static/images/footer/cloudflare.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerPlayStoreImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/button-playstore.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerAppStoreImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/button-appstore.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerCornerImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/phone-image.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerCornerImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/extension-happy-bag.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-my.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-ph.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-id.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-tw.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-th.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-au.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/flag-vn.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg footerSocialIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/icon-twitter.svg" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg footerSocialIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/icon-facebook.svg" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerIconImg footerSocialIconImg" src="https://cloud.shopback.com/raw/upload/static/images/footer/icon-instagram.svg" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerLogo" src="https://cloud.shopback.com/raw/upload/static/images/footer/shopback-logo.png" alt="" xmlns="http://www.w3.org/1999/xhtml"/>,<img class="footerHappydance" src="https://cloud.shopback.com/raw/upload/static/images/footer/happydance-loader.gif" alt="" xmlns="http://www.w3.org/1999/xhtml"/>
nodes.length = 158
<img src="https://cloud.shopback.com/raw/upload/static/images/navbar/sb-logo.png" xmlns="http://www.w3.org/1999/xhtml"/>
```

<!-- AUTO-GENERATED-CONTENT:END -->

### `fromNode(xml).findElement(expression)`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElement.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElement.js -->

```js
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElement.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElement.txt -->

```txt

```

<!-- AUTO-GENERATED-CONTENT:END -->

### `fromNode(xml).findElements(expression)`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/fromNode.findElements.js) -->
<!-- The below code snippet is automatically added from examples/fromNode.findElements.js -->

```js
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/fromNode.findElements.txt) -->
<!-- The below code snippet is automatically added from output/fromNode.findElements.txt -->

```txt

```

<!-- AUTO-GENERATED-CONTENT:END -->

### `getTagName()`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/getTagName.js) -->
<!-- The below code snippet is automatically added from examples/getTagName.js -->

```js
// One element
// Multiple elements
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/getTagName.txt) -->
<!-- The below code snippet is automatically added from output/getTagName.txt -->

```txt

```

<!-- AUTO-GENERATED-CONTENT:END -->

### `getText()`

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=examples/getText.js) -->
<!-- The below code snippet is automatically added from examples/getText.js -->

```js
// One element
// Multiple elements
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=output/getText.txt) -->
<!-- The below code snippet is automatically added from output/getText.txt -->

```txt

```

<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

1. [xpath](https://github.com/goto100/xpath)
1. [xmldom](https://github.com/jindw/xmldom)
1. [xmlserializer](https://github.com/cburgmer/xmlserializer)
1. [parse5](https://github.com/inikulin/parse5)

## License

MIT
