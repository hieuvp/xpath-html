const xpath = require('xpath-html');
const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/shopback.html`, 'UTF-8');
const nodes = xpath.queryFromPage("//*[text()='Made with love by']", html);

console.log(nodes.toString());
