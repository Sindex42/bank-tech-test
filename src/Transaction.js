'use strict'

class Transaction {
  constructor (amount, newBalance, date = new Date()) {
    this.date = date.toLocaleDateString()
    this.amount = amount
    this.newBalance = newBalance
  }
}
