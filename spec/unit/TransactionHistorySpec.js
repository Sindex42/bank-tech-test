'use strict'

describe('TransactionHistory', () => {
  let creditTransaction, debitTransaction, header, history, transaction

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

  describe('#print', () => {
    it('prints a header', () => {
      expect(history.print()).toContain(header)
    })
  })

  describe('#formatLine', () => {
    it('prints the new account balance', () => {
      transaction = { amount: 500, newBalance: 700 }
      expect(history.formatLine(transaction)).toContain('700.00')
    })
  })

  describe('#determineType', () => {
    it('prints the credit amount', () => {
      creditTransaction = { amount: 500, newBalance: 1000 }
      expect(history.determineAmountType(creditTransaction)).toContain('500.00 ||        ')
    })

    it('prints the debit amount', () => {
      debitTransaction = { amount: -500, newBalance: 1000 }
      expect(history.determineAmountType(debitTransaction)).toContain('        || 500.00')
    })
  })
})
