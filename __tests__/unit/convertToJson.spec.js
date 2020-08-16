const fs = require('fs')
const exampleCss = fs.readFileSync(`${process.env.PWD}/bin/exampleCss.pride`, 'utf8')
const convertToJson = require('../../src/utilities/convertToJson')

describe('convertToJson', () => {
  test('Returns a valid JSON object to manipulate when valid CSS supplied', () => {
    const jsonVerified = typeof convertToJson(exampleCss) === 'object'
    expect(jsonVerified).toBe(true)
  })
  test('Returns an error when invalid CSS supplied', () => {
    const invalidatedCss = exampleCss.replace(':', '')
    expect(() => convertToJson(invalidatedCss)).toThrow()
  })
})
