'use strict'

describe('Transaction', () => {
  let transaction

  beforeEach(() => {
    transaction = new Transaction(new Date(2019, 1, 11), 500)
  })

  it('should initialize with a date', () => {
    expect(transaction.date).toEqual('11/02/2019')
  })

  it('should specify the transaction amount', () => {
    expect(transaction.amount).toEqual(500)
  })
})
