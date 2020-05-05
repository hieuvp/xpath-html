const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log('Text of the node:', node.getText());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//div[@id='home-page-container']//*[@class='title-text']");

console.log('Text of nodes[0]:', nodes[0].getText());
console.log('Text of nodes[1]:', nodes[1].getText());
