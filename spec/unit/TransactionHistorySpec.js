'use strict'

describe('TransactionHistory', () => {
  let credit, debit, history, header

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
  })

  describe('#formatStatementLine', () => {
    beforeEach(() => {
      credit = {date: "01/12/1916", amount: 500, newBalance: 1000}
      debit = {date: "01/12/1916", amount: -500, newBalance: 1000}
    })

    it('prints the credit amount', () => {
      expect(history.formatStatementLine(credit)).toContain('500.00 ||        ')
    })

    it('prints the debit amount', () => {
      expect(history.formatStatementLine(debit)).toContain('        || 500.00')
    })

    it('prints the new account balance', () => {
      expect(history.formatStatementLine(debit)).toContain('1000.00')
    })
  })
})
