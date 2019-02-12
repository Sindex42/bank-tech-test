'use strict'
/* global it, expect, describe, beforeEach, Account */

describe('Features', () => {
  let account, date

  beforeEach(() => {
    account = new Account()
    date = '11/2/2019'
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
    it('a client can see the date of a deposit', () => {
      expect(account.printStatement).toContain(date)
    })
  })
})
