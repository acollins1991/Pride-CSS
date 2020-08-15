const convertToJson = require('../../src/utilities/convertToJson')

describe('convertToJson', () => {
  test('Returns a valid JSON object to manipulate when valid CSS supplied', () => {
    const jsonVerified = typeof convertToJson('.test { background: white; }') === 'object'
    // console.log(JSON.stringify(convertToJson(sampleCSSString)))
    expect(jsonVerified).toBe(true)
  })
  test('Returns an error when invalid CSS supplied', () => {
    let jsonVerified
    try {
      jsonVerified = typeof convertToJson('.test { background white; }') === 'object'
    } catch (error) {
      expect(error).toEqual(new Error("undefined:1:20: property missing ':'"))
    }
  })
})
