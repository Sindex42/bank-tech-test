'use strict'
/* global it, expect, describe, beforeEach, TransactionHistory */

describe('TransactionHistory', () => {
  let statement, transaction, transactionClass

  beforeEach(() => {
    statement = new TransactionHistory()
  })

  it('instatiates with an empty transaction history', () => {
    expect(statement.history).toEqual([])
  })

  describe('#addTransaction', () => {
    it('adds a transaction to the history', () => {
      statement.addTransaction(500, 1000)
      expect(statement.history[0].amount).toEqual(500)
      expect(statement.history[0].newBalance).toEqual(1000)
    })
  })
})
