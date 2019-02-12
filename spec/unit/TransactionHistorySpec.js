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
      history.addTransaction(500.00, 1000.00)

      expect(history.transactions[0].amount).toEqual(500.00)
      expect(history.transactions[0].newBalance).toEqual(1000.00)
    })
  })

  describe('#printStatement', () => {
    it('prints a header', () => {
      expect(history.printStatement()).toContain(header)
    })

    it('prints the credit amount', () => {
      history.addTransaction(500.00, 1000.00)
      expect(history.printStatement()).toContain('500.00 ||        ')
    })

    it('prints the debit amount', () => {
      history.addTransaction(-500.00, 1000.00)
      expect(history.printStatement()).toContain('        || 500.00')
    })

    it('prints the new account balance', () => {
      history.addTransaction(500.00, 1000.00)
      expect(history.printStatement()).toContain('1000.00')
    })
  })
})
