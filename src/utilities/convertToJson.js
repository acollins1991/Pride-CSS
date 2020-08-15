const css = require('css')

/**
 * Return an AST object converted from a CSS string
 * @function
 * @param {string} cssString
 * @returns {object} AST object
 */
function convertToJson (cssString) {
  return css.parse(cssString)
}

module.exports = convertToJson
