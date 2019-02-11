'use strict'

class Transaction {
  constructor (date = new Date, amount) {
    this.date = date.toLocaleDateString()
    this.amount = amount
  }
}
