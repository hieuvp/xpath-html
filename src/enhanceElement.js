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
  if (nodeName === '#text') {
    return get(node, ['firstChild', 'nodeValue']);
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
