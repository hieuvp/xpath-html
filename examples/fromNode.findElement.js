const xpath = require('xpath-html');
const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'UTF-8');
const group = xpath.fromPageSource(html).findElement("//div[@class='ui-store-group']");

const node = xpath.fromNode(group).findElement("//a[@href='/aliexpress']");
console.log(node.toString());
