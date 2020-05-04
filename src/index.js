const parser = require('parse5');
const { serializeToString } = require('xmlserializer');

const XPath = require('./XPath');

/**
 * @param {string} xml
 * @returns {XPath}
 */
const fromNode = (xml) => new XPath(xml.toString());

/**
 * @param {string} html
 * @returns {XPath}
 */
const fromPageSource = (html) => {
  const dom = parser.parse(html);
  const xhtml = serializeToString(dom);

  return fromNode(xhtml);
};

module.exports = {
  fromNode,
  fromPageSource,
};
