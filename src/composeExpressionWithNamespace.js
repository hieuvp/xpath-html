/**
 * @param {string} expression - The XPath expression
 * @param {string} namespace - The XML namespace
 * @returns {string}
 */
module.exports = (expression, namespace) => {
  const pattern = /^([./\\]*)/g;
  return expression.replace(pattern, `$1${namespace}:`);
};
