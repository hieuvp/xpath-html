const fs = require('fs');
const xpath = require('xpath-html');

// Assuming you've got an html file locally,
// here is a file which I scraped from www.shopback.sg
const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');

// Don't worry much about the input,
// you could be able to use an HTML response from an HTTP request
// As long as the argument is a string type, everything should be fine.
const node = xpath.fromPageSource(html).findElement("//*[contains(text(), 'with love')]");

console.log(`The matching tag is "${node.getTagName()}"`);
console.log(`Your full text is "${node.getText()}"`);
