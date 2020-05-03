const xpath = require('xpath-html');
const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'UTF-8');
const node = xpath.queryFromPage("//*[text()='Made with love by']", html, true);

console.log(node.toString());

// console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
// console.log("Node: " + nodes[0].toString())
