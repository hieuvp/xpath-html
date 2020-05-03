const xpath = require('xpath-html');
const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'UTF-8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.toString());

console.log(`${node.tagName}: ${node.firstChild.data}`);
