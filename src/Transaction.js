'use strict'

class Transaction {
  constructor (date = new Date) {
    this.date = date.toLocaleDateString()
  }
}
