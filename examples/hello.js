const fs = require('fs');
const xpath = require('xpath-html');

// Assuming you are having an html file locally,
// Don't worry much about this, you can make an HTTP request and get a response as html and
// Send into as an input,
// As long as, the argument is a string, everything should be fine.
const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matching tag is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
