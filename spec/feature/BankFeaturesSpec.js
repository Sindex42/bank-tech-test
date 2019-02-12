describe('Features', () => {
  let account

  beforeEach(()=> {
    account = new Account()
  })

  describe('Depositing', () => {
    it('client can make a deposit', () => {
      account.deposit(500.00)

      expect(account.balance).toEqual(500.00)
    })
  })

  describe('Withdrawing', () => {
    it('client can make a withdrawal', () => {
      account.withdraw(500.00)

      expect(account.balance).toEqual(-500.00)
    })
  })
})
