const { parse } = require('parse5');
const { serializeToString } = require('xmlserializer');

const XPath = require('./XPath');

/**
 * @param {object|string} xhtml
 * @returns {XPath}
 */
const fromNode = (xhtml) => new XPath(xhtml.toString());

/**
 * @param {string} html
 * @returns {XPath}
 */
const fromPageSource = (html) => {
  const dom = parse(html);
  const xhtml = serializeToString(dom);

  return fromNode(xhtml);
};

module.exports = {
  fromNode,
  fromPageSource,
};
