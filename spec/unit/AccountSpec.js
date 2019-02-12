'use strict'
/* global it, expect, describe, beforeEach, Account */

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  it('has an initial balance of 0.00', () => {
    expect(account.balance).toEqual(0.00)
  })

  it('has a statement property', () => {
    expect(account.history).toBeDefined()
  })

  describe('#deposit', () => {
    it('credits an amount to the account', () => {
      account.deposit(500.00)
      expect(account.balance).toEqual(500.00)
    })

    it('adds a statement to the history', () => {
      spyOn(this.history, 'addTransaction')
      account.deposit(500.00)

      expect(account.history.addTransaction).toHaveBeenCalled()
    })
  })

  describe('#withdraw', () => {
    it('debits an amount from the account', () => {
      account.balance = 500.00
      account.withdraw(250.00)

      expect(account.balance).toEqual(250.00)
    })
  })
})
