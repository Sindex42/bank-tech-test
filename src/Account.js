'use strict'

class Account {
  constructor () {
    this.balance = 0.00
  }

  deposit (credit) {
    this.balance += credit
    return this.balance
  }

  withdraw (debit) {
    this.balance -= debit
    return this.balance
  }
}
