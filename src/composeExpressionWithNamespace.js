const REGEX = /(\/+)(.+\[.+])?/g;

/**
 * Compose the given XPath expression with a namespace
 *
 * @param {string} expression - The XPath expression
 * @param {string} namespace - The XML namespace
 * @returns {string}
 */
module.exports = (expression, namespace) => expression.replace(REGEX, `$1${namespace}:$2`);
