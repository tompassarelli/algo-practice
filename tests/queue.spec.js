const { Queue } = require('../data-structures/queue') // extract from file what we want to test
const { expect } = require('chai')

describe('queue', () => {
  it('insertion works as expected when 0 el exists', () => {
    const q = new Queue()
    q.enqueue(1)
    let result = q.head.value
    expect(result).to.be.eq(1)
  })
  it('insertion works as expected when 1 el exists', () => {
    const q = new Queue()
    q.enqueue(1)
    q.enqueue(2)
    let result = q.head.value
    expect(result).to.be.eq(1)
  })
  it('dequeue returns head node', () => {
    const q = new Queue()
    q.enqueue(1)
    q.enqueue(2)
    let result = q.dequeue()
    expect(result).to.be.eq(1)
  })
})