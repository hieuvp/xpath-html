const xpath = require('xpath');
const { DOMParser } = require('xmldom');

const xmlserializer = require('xmlserializer');
const parser = require('parse5');

const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');

/**
 *
 * @param {string} expression
 * @param {string} node
 * @param {boolean} single
 * @returns {object}
 */
const queryFromNode = (expression, node, single = false) => {
  const document = new DOMParser().parseFromString(node);
  const namespace = 'x';
  const select = xpath.useNamespaces({ [namespace]: 'http://www.w3.org/1999/xhtml' });

  const enhancedExpression = composeExpressionWithNamespace(expression, namespace);

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
