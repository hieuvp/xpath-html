const xpath = require('xpath');
const { DOMParser } = require('xmldom');

const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');
const extendElement = require('./extendElement');

const DEFAULT_NAMESPACE = 'x';

/**
 * XPath
 *
 * @class
 */
class XPath {
  /**
   * @param {string} xhtml
   */
  constructor(xhtml) {
    const document = new DOMParser().parseFromString(xhtml);
    const select = xpath.useNamespaces({ [DEFAULT_NAMESPACE]: 'http://www.w3.org/1999/xhtml' });

    this.document = document;
    this.select = select.bind(this);
  }

  /**
   * @param {string} expression
   * @returns {object}
   */
  findElement(expression) {
    const single = true;
    const enhancedExpression = composeExpressionWithNamespace(expression, DEFAULT_NAMESPACE);

    const node = this.select(enhancedExpression, this.document, single);
    extendElement(node);

    return node;
  }

  /**
   * @param {string} expression
   * @returns {Array<object>}
   */
  findElements(expression) {
    const single = false;
    const enhancedExpression = composeExpressionWithNamespace(expression, DEFAULT_NAMESPACE);

    const nodes = this.select(enhancedExpression, this.document, single);
    nodes.forEach((node) => extendElement(node));

    return nodes;
  }
}

module.exports = XPath;
