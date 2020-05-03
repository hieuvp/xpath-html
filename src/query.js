const xpath = require('xpath');
const { DOMParser } = require('xmldom');

const xmlserializer = require('xmlserializer');
const parser = require('parse5');

const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');

const DEFAULT_NAMESPACE = 'x';

/**
 *
 * @param {string} expression
 * @param {string} node
 * @param {boolean} single
 * @returns {object}
 */
const queryFromNode = (expression, node, single = false) => {
  const document = new DOMParser().parseFromString(node.toString());
  const select = xpath.useNamespaces({ [DEFAULT_NAMESPACE]: 'http://www.w3.org/1999/xhtml' });
  const enhancedExpression = composeExpressionWithNamespace(expression, DEFAULT_NAMESPACE);

  return select(enhancedExpression, document, single);
};

/**
 * @param {string} expression
 * @param {string} pageSource
 * @param {boolean} single
 * @returns {object}
 */
const queryFromPageSource = (expression, pageSource, single = false) => {
  const dom = parser.parse(pageSource);
  const xhtml = xmlserializer.serializeToString(dom);

  return queryFromNode(expression, xhtml, single);
};

module.exports = {
  queryFromNode,
  queryFromPageSource,
};
