const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const node = xpath.fromNode(group).findElement("//a[@href='/aliexpress']");

console.log(node.toString());
