'use strict'

describe ('Account', () => {
  let account = new Account()

  it('should have an initial balance of 0.00', () => {
    expect(account.balance).toEqual(0.00)
  })

  describe ('#deposit', () => {
    it('should add an amount to the account', () => {
      account.deposit(500.00)

      expect(account.balance).toEqual(500.00)
    })
  })
})
