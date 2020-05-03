/**
 * Compose the given XPath expression with a namespace
 *
 * @param {string} expression - The XPath expression
 * @param {string} namespace - The XML namespace
 * @returns {string}
 */
module.exports = (expression, namespace) => {
  const regex = /^([./\\]*)/g;
  return expression.replace(regex, `$1${namespace}:`);
};
