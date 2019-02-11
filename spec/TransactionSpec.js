'use strict'

describe('Transaction', () => {
  let transaction

  beforeEach(() => {
    transaction = new Transaction
  })

  it('should initialize with a date', () => {
    transaction = new Transaction(new Date(2019, 1, 11))
    expect(transaction.date).toEqual('11/02/2019')
  })
})
