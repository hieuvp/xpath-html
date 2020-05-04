const fs = require('fs');
const xpath = require('xpath-html');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'utf8');
const node = xpath.fromPageSource(html).findElement("//*[text()='Made with love by']");

console.log(node.getText());

const nodes = xpath
  .fromPageSource(html)
  .findElements("//div[@id='home-page-container']//*[@class='title-text']");

console.log(nodes[0].getText());
console.log(nodes[1].getText());
