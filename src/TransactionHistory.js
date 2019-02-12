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
    let balanceDiff, header, statement, transactionString

    statement = ''
    header = 'date       || credit  || debit   || balance\n'

    statement += header

    this.transactions.forEach((transaction) => {
      const amount = Math.abs(transaction.amount).toFixed(2)

      if (transaction.amount >= 0) {
        balanceDiff = `${amount} ||        `
      } else {
        balanceDiff = `        || ${amount}`
      }

      transactionString = ` ${transaction.date} || ${balanceDiff} || ${transaction.newBalance.toFixed(2)}\n`
      statement += transactionString
    })

    return statement
  }
}
