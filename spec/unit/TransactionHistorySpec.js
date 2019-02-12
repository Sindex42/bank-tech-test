'use strict'
/* global it, expect, describe, beforeEach, TransactionHistory */

describe('TransactionHistory', () => {
  let history, header

  beforeEach(() => {
    header = 'date       || credit  || debit   || balance'
    history = new TransactionHistory()
  })

  it('instatiates with an empty transaction history', () => {
    expect(history.transactions).toEqual([])
  })

  describe('#addTransaction', () => {
    it('adds a transaction to the history', () => {
      history.addTransaction(500, 1000, new Date(2019, 1, 11))

      expect(history.transactions[0].amount).toEqual(500)
      expect(history.transactions[0].newBalance).toEqual(1000)
    })
  })

  describe('#printStatement', () => {
    it('prints a header', () => {
      expect(history.printStatement()).toContain(header)
    })
  })
})
