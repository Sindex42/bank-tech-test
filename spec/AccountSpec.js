'use strict'
/* global it, expect, describe, beforeEach, Account */

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  it('should have an initial balance of 0.00', () => {
    expect(account.balance).toEqual(0.00)
  })

  describe('#deposit', () => {
    it('should credit an amount to the account', () => {
      account.deposit(500.00)

      expect(account.balance).toEqual(500.00)
    })
  })

  describe('#withdraw', () => {
    it('should debit an amount from the account', () => {
      account.balance = 500.00
      account.withdraw(250.00)

      expect(account.balance).toEqual(250.00)
    })
  })
})
