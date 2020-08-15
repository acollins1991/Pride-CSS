const css = require('css')

/**
 * Convert an AST object to a CSS string
 * @function
 * @param {object} astObject
 * @returns {string} A valid CSS string
 */
function convertToCss (astObject) {
  return css.stringify(astObject)
}

module.exports = convertToCss
