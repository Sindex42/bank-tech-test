'use strict'
/* global it, expect, describe, beforeEach, TransactionHistory */

describe('TransactionHistory', () => {
  let statement

  beforeEach(() => {
    statement = new TransactionHistory()
  })

  it('instatiates with an empty transaction history', () => {
    expect(statement.transactions).toEqual([])
  })

  describe('#addTransaction', () => {
    it('adds a transaction to the history', () => {
      statement.addTransaction(500, 1000)
      expect(statement.transactions[0].amount).toEqual(500)
      expect(statement.transactions[0].newBalance).toEqual(1000)
    })
  })
})
