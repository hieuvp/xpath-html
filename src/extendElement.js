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
  const length = get(node, ['childNodes', 'length']);

  for (let index = 0; index < length; index += 1) {
    const nodeName = get(node, ['childNodes', index, 'nodeName']);
    const nodeValue = get(node, ['childNodes', index, 'nodeValue']);

    if (nodeName === '#text' && typeof nodeValue === 'string') {
      return nodeValue;
    }
  }

  return undefined;
};

/**
 * Add more functionalities into the existing APIs
 *
 * @param {object} node
 * @returns {object}
 */
module.exports = (node) =>
  Object.assign(node, {
    getTagName: () => getTagName(node),
    getText: () => getText(node),
  });
