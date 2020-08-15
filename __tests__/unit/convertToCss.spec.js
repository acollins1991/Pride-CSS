const convertToCss = require('../../src/utilities/convertToCss')

describe('convertToCss', () => {
  test('Returns a CSS string from an AST object', () => {
    const object = JSON.parse('{"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"background","value":"white","position":{"start":{"line":1,"column":9},"end":{"line":1,"column":26}}}],"position":{"start":{"line":1,"column":1},"end":{"line":1,"column":29}}}],"parsingErrors":[]}}')
    const cssValid = typeof convertToCss(object) === 'string'
    expect(cssValid).toBe(true)
  })
})
