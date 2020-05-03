const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`Your tag name is "${node.getTagName()}"`);
console.log(`The matching text is "${node.getText()}"`);
