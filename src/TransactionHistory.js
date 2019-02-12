'use strict'

class TransactionHistory {
  constructor () {
    this.transactions = []
  }

  addTransaction (amount, newBalance) {
    let transaction = new Transaction(amount, newBalance)
    this.transactions.push(transaction)
  }

  printStatement () {
    let header = 'date       || credit  || debit   || balance'
    return header
  }
}
