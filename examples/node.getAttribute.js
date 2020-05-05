const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log("Single node's tag name:", node.getAttribute('href'));
