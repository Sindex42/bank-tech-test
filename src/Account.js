'use strict'

class Account {
  constructor (history = new TransactionHistory()) {
    this.balance = 0.00
    this.history = history
  }

  deposit (credit) {
    this.balance += credit
    this.history.addTransaction(credit, this.balance)
    return this.balance
  }

  withdraw (debit) {
    this.balance -= debit
    return this.balance
  }
}
