// One element
// Multiple elements

const xpath = require('xpath-html');
const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'UTF-8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getTagName());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log(nodes[0].getTagName());
console.log(nodes[1].getTagName());
