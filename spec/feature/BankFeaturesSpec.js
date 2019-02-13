'use strict'

describe('Features', () => {
  let account, header, today

  beforeEach(() => {
    account = new Account()
  })

  describe('Depositing', () => {
    it('a client can make a deposit', () => {
      account.deposit(500.00)

      expect(account.balance).toEqual(500.00)
    })
  })

  describe('Withdrawing', () => {
    it('a client can make a withdrawal', () => {
      account.withdraw(500.00)

      expect(account.balance).toEqual(-500.00)
    })
  })

  describe('Statements', () => {
    beforeEach(() => {
      today = (new Date()).toLocaleDateString()
      header = 'date       || credit  || debit   || balance'

      account.deposit(1500.00)
      account.withdraw(1000.00)
    })

    it('a client can see a descriptive header', () => {
      expect(account.printStatement()).toContain(header)
    })

    it('a client can see the date of a deposit', () => {
      expect(account.printStatement()).toContain(today)
    })

    it('a client can see the amount deposited', () => {
      expect(account.printStatement()).toContain(1500.00)
    })

    it('a client can see the amount withdrawn', () => {
      expect(account.printStatement()).toContain(1000.00)
    })

    it('a client can see the updated balance', () => {
      expect(account.printStatement()).toContain(500.00)
    })
  })
})
