const get = require('lodash.get');

/**
 * @param {object} node
 * @returns {string}
 */
const getTagName = (node) => get(node, ['tagName']);

/**
 * @param {object} node
 * @returns {string}
 */
const getText = (node) => {
  const nodeName = get(node, ['firstChild', 'nodeName']);
  const nodeValue = get(node, ['firstChild', 'nodeValue']);

  if (nodeName === '#text' && typeof nodeValue === 'string') {
    return nodeValue;
  }

  return undefined;
};

/**
 *
 * @param {object} node
 * @returns {object}
 */
module.exports = (node) =>
  Object.assign(node, {
    getTagName: () => getTagName(node),
    getText: () => getText(node),
  });
