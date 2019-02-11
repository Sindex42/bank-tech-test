'use strict'

class Account {
  constructor () {
    this.balance = 0.00
  }

  deposit (credit) {
    this.balance += credit
    return this.balance
  }
}
