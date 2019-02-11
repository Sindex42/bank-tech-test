'use strict'
/* global it, expect, describe, beforeEach, Statement */

describe('Statement', () => {
  let statement

  beforeEach(() => {
    statement = new Statement()
  })

  it('instatiates with an empty transaction history', () => {
    expect(statement.transactions).toEqual([])
  })
})
