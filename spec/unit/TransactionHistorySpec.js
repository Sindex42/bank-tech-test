'use strict'

describe('TransactionHistory', () => {
  let creditTransaction, debitTransaction, history, header

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
      expect(history.print()).toContain(header)
    })
  })

  describe('#formatStatementLine', () => {
    beforeEach(() => {
      creditTransaction = {amount: 500, newBalance: 1000}
      debitTransaction = {amount: -500, newBalance: 1000}
    })

    it('prints the credit amount', () => {
      expect(history.format(creditTransaction)).toContain('500.00 ||        ')
    })

    it('prints the debit amount', () => {
      expect(history.format(debitTransaction)).toContain('        || 500.00')
    })

    it('prints the new account balance', () => {
      expect(history.format(debitTransaction)).toContain('1000.00')
    })
  })
})
