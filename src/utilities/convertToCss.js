const css = require('css')

/**
 * Convert an AST object to a CSS string
 * @param {object} astObject
 */
function convertToCss (astObject) {
  return css.stringify(astObject)
}

module.exports = convertToCss
