const { serializeToString } = require('xmlserializer');
const parser = require('parse5');

const XPath = require('./XPath');

/**
 *
 * @param {object} node
 * @returns {XPath}
 */
const fromNode = (node) => new XPath(node.toString());

/**
 *
 * @param {string} pageSource
 * @returns {XPath}
 */
const fromPageSource = (pageSource) => {
  const dom = parser.parse(pageSource);
  const xhtml = serializeToString(dom);

  return fromNode(xhtml);
};

module.exports = {
  fromNode,
  fromPageSource,
};
