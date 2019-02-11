'use strict'
/* global it, expect, describe, beforeEach, Transaction */

describe('Transaction', () => {
  let transaction

  beforeEach(() => {
    transaction = new Transaction(new Date(2019, 1, 11), 500.00, 0.00)
  })

  it('should initialize with a date', () => {
    expect(transaction.date).toEqual('11/02/2019')
  })

  it('should specify the transaction amount', () => {
    expect(transaction.amount).toEqual(500.00)
  })

  it('should carry a previous account balance ', () => {
    expect(transaction.balance).toEqual(0.00)
  })
})
