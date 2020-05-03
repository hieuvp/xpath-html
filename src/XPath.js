const { DOMParser } = require('xmldom');
const xpath = require('xpath');

const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');
const enhanceElement = require('./enhanceElement');

const DEFAULT_NAMESPACE = 'x';

/**
 * XPath
 *
 * @class
 */
class XPath {
  /**
   * @param {string} xml
   */
  constructor(xml) {
    const document = new DOMParser().parseFromString(xml);
    const select = xpath.useNamespaces({ [DEFAULT_NAMESPACE]: 'http://www.w3.org/1999/xhtml' });

    this.document = document;
    this.select = select.bind(this);
  }

  /**
   * @param {string} expression
   * @returns {*}
   */
  findElement(expression) {
    const single = true;
    const enhancedExpression = composeExpressionWithNamespace(expression, DEFAULT_NAMESPACE);

    const node = this.select(enhancedExpression, this.document, single);
    enhanceElement(node);

    return node;
  }

  /**
   * @param {string} expression
   * @returns {*}
   */
  findElements(expression) {
    const single = false;
    const enhancedExpression = composeExpressionWithNamespace(expression, DEFAULT_NAMESPACE);

    const nodes = this.select(enhancedExpression, this.document, single);
    nodes.forEach((node) => enhanceElement(node));

    return nodes;
  }
}

module.exports = XPath;
