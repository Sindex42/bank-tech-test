'use strict'

class Account {
  constructor (statement = new Statement) {
    this.balance = 0.00
    this.statement = statement
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
