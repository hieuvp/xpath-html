const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log("Single node's tag name:", node.getTagName());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log('First nodes[0] tag name:', nodes[0].getTagName());
console.log('Second nodes[1] tag name:', nodes[1].getTagName());
