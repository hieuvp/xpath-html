const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//a[text()='View All Popular Stores']");

console.log('The href value is:', node.getAttribute('href'));
