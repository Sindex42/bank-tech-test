'use strict'

class Statement {
  constructor () {
    this.history = []
  }

  add (transaction) {
    this.history.push(transaction)
  }
}
