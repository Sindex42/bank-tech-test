'use strict'

describe('TransactionHistory', () => {
  let creditTransaction, debitTransaction, header, history, transaction

  beforeEach(() => {
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
      header = 'date       || credit  || debit   || balance'
      expect(history.print()).toContain(header)
    })
  })

  describe('#formatLine', () => {
    it('formats a transaction', () => {
      transaction = { date: "11/02/2019", amount: 500, newBalance: 1000 }
      expect(history.formatLine(transaction)).toContain('11/02/2019 || 500.00 ||        || 1000.00')
    })
  })

  describe('#determineType', () => {
    it('prints the amount under the credit column', () => {
      creditTransaction = { amount: 500 }
      expect(history.determineAmountType(creditTransaction)).toContain('500.00 ||        ')
    })

    it('prints the amount under the debit column', () => {
      debitTransaction = { amount: -500 }
      expect(history.determineAmountType(debitTransaction)).toContain('        || 500.00')
    })
  })
})
