const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//a[@href='/aliexpress']");

console.log('href attribute:', node.getAttribute('href'));
