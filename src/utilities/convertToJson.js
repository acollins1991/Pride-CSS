const css = require('css')

/**
 * Return an AST object converted from a CSS string
 * @param {string} cssString
 */
function convertToJson (cssString) {
  return css.parse(cssString)
}

module.exports = convertToJson
