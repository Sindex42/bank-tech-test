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

  printStatement () {
    let header, statement, transactionString

    statement = ''
    header = 'date       || credit  || debit   || balance\n'

    statement += header

    this.transactions.forEach((transaction) => {
      transactionString = this.formatStatementLine(transaction)
      statement += transactionString
    })

    return statement
  }

  formatStatementLine (transaction) {
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
