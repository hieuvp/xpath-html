const fs = require('fs');
const xpath = require('xpath-html');

// Assuming you have an html file locally,
// here is the content I scraped from www.shopback.sg
const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');

// Don't worry about the input much,
// you could be able to use an HTML response of an HTTP request
// As long as the args is a string type, everything should be fine.
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matching tag is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
