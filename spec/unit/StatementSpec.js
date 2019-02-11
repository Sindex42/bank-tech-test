'use strict'
/* global it, expect, describe, beforeEach, Statement */

describe('Statement', () => {
  let statement, transaction

  beforeEach(() => {
    statement = new Statement()
  })

  it('instatiates with an empty transaction history', () => {
    expect(statement.history).toEqual([])
  })

  describe('#add', () => {
    let transaction = { amount: 500, newBalance: 1000, date: '11/02/2019'}

    it('adds a transaction to the history', () => {
      statement.add(transaction)
      expect(statement.history[0].amount).toEqual(500)
      expect(statement.history[0].newBalance).toEqual(1000)
      expect(statement.history[0].date).toEqual('11/02/2019')
    })
  })
})
