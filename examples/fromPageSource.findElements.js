const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const nodes = xpath
  .fromPageSource(html)
  .findElements("//img[starts-with(@src, 'https://cloud.shopback.com')]");

console.log('Number of nodes found:', nodes.length);
console.log('nodes[0]:', nodes[0].toString());
console.log('nodes[1]:', nodes[1].toString());
