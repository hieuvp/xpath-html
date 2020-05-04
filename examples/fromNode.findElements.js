const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const nodes = xpath.fromNode(group).findElements("//img[contains(@src,'shopily')]");

console.log('length =', nodes.length);

console.log(nodes[0].toString());
console.log(nodes[1].toString());
