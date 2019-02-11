'use strict'

class Transaction {
  constructor (date = new Date(), amount, balance) {
    this.date = date.toLocaleDateString()
    this.amount = amount
    this.balance = balance
  }
}
