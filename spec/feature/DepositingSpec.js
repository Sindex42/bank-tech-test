'use strict'
/* global it, expect, describe, beforeEach, Account */

describe('Depositing', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  it('creates a new transaction and adds it to the history', () => {
    account.deposit(500)

    expect(account.history.transactions[0].amount).toEqual(500)
    expect(account.history.transactions[0].newBalance).toEqual(500)
  })
})
