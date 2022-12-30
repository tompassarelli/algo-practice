const { test } = require('../random/test') // extract from file what we want to test
const { expect } = require('chai')

describe('the test function', () => {
  it('returns \'mocha test\' as string', () => {
    const result = test()
    // mocha default: assert.equal(result, 'mocha test')
    // chai: expect(result).to.be.eq('mocha test')
    expect(result).to.be.eq('mocha test')
  })
})