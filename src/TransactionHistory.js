'use strict'

class TransactionHistory {
  constructor () {
    this.transactions = []
  }

  addTransaction (amount, newBalance) {
    let transaction

    transaction = new Transaction(amount, newBalance)
    this.transactions.push(transaction)
  }

  print () {
    let statement = 'date       || credit  || debit   || balance\n'
    this.transactions.forEach((transaction) => {
      statement += this.formatLine(transaction)
    })
    return statement
  }

  formatLine (transaction) {
    let balanceDiff = this.determineAmountType(transaction)

    return ` ${transaction.date} || ${balanceDiff}` +
           `|| ${transaction.newBalance.toFixed(2)}\n`
  }

  determineAmountType (transaction) {
    const amount = Math.abs(transaction.amount).toFixed(2)

    if (transaction.amount >= 0) { return `${amount} ||        ` }
    return `        || ${amount}`
  }
}
