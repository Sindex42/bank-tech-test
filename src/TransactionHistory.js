'use strict'

class TransactionHistory {
  constructor () {
    this.history = []
  }

  addTransaction (amount, newBalance) {
    let transaction = new Transaction(amount, newBalance)
    this.history.push(transaction)
  }
}
