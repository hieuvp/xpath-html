const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matching tag is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
