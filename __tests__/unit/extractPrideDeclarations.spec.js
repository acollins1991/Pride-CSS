const extractPrideDeclarations = require('../../src/utilities/extractPrideDeclarations.js')
const convertToJson = require('../../src/utilities/convertToJson.js')
const fs = require('fs')
const exampleCss = fs.readFileSync(`${process.env.PWD}/bin/exampleCss.pride`, 'utf8')

const astObject = convertToJson(exampleCss)

describe('extractPrideDeclarations.js', () => {
  test('Returns an array of pride css declarations', () => {
    extractPrideDeclarations(astObject).forEach(rule => {
      expect(rule.property.indexOf('pride')).toBeGreaterThan(-1)
    })
  })
})
