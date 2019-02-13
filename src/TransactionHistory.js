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
      let transactionString = this.format(transaction)
      statement += transactionString
    })

    return statement
  }

  format (transaction) {
    let balanceDiff
    const amount = Math.abs(transaction.amount).toFixed(2)

    if (transaction.amount >= 0) {
      balanceDiff = `${amount} ||        `
    } else {
      balanceDiff = `        || ${amount}`
    }

    return ` ${transaction.date} || ${balanceDiff} || ${transaction.newBalance.toFixed(2)}\n`
  }
}
