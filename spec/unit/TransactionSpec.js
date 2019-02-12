'use strict'
/* global it, expect, describe, beforeEach, Transaction */

describe('Transaction', () => {
  let transaction

  beforeEach(() => {
    transaction = new Transaction(500.00, 600.00, new Date(2019, 1, 11))
  })

  it('initializes with a date', () => {
    expect(transaction.date).toEqual('11/02/2019')
  })

  it('specifies the transaction amount', () => {
    expect(transaction.amount).toEqual(500.00)
  })

  it('carries the new account balance', () => {
    expect(transaction.newBalance).toEqual(600.00)
  })
})
