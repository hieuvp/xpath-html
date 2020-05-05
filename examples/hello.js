const fs = require('fs');
const xpath = require('xpath-html');

// Assuming you have an html file locally,
// Here is the content that I scraped from www.shopback.sg
const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');

// Don't worry about the input much,
// you are able to use an HTML response of an HTTP request,
// as long as the argument is a string type, everything should be fine.
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matched tag name is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
