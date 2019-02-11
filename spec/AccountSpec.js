'use strict'

describe ('Account', () => {
  let account = new Account()

  it('should have an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  })
})
