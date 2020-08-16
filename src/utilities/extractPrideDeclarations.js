/**
 * Extract only pride rules/declarations from the AST object
 * @function
 * @param {object} astObject
 * @returns {object} Pride rules/declarations with the rule and declaration indexes
 */
function extractPrideDeclarations (astObject) {
  const prideDeclarations = []
  astObject.stylesheet.rules.forEach((rule, index) => {
    const ruleIndex = index
    rule.declarations.forEach((declaration, index) => {
      const declarationIndex = index
      if (declaration.property.indexOf('pride') > -1) {
        declaration.ruleIndex = ruleIndex
        declaration.declarationIndex = declarationIndex
        prideDeclarations.push(declaration)
      }
    })
  })
  return prideDeclarations
}

module.exports = extractPrideDeclarations
