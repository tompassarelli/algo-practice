const { Stack } = require('../data-structures/stack-ref') // extract from file what we want to test
const { expect } = require('chai')

describe('stack', () => {
  it('insertion works as expected when 0 el exists', () => {
    const stck = new Stack()
    stck.push(2)
    let result = stck.peek()
    // mocha default: assert.equal(result, 'mocha test')
    // chai: expect(result).to.be.eq('mocha test')
    expect(result).to.be.eq(2)
  })
  it('insertion works as expected when 1 el exists', () => {
    const stck = new Stack()
    stck.push(1)
    stck.push(2)
    let result = stck.peek()
    expect(result).to.be.eq(2)
  })
  it('pop returns top node', () => {
    const stck = new Stack()
    stck.push(1)
    stck.push(2)
    let result = stck.pop()
    expect(result).to.be.eq(2)
  })
  it('pop mutates stack to be 1 less that previous size 2', () => {
    const stck = new Stack()
    stck.push(1)
    stck.push(2)
    stck.pop()
    let result = stck.size;
    expect(result).to.be.eq(1)
  })
  it('pop resets first correctly stack size 3', () => {
    const stck = new Stack()
    stck.push(1)
    stck.push(2)
    stck.push(3)
    stck.pop()
    let result = stck.peek()
    expect(result).to.be.eq(2)
  })
})