# Bank tech test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit   || balance
14/01/2012 ||         || 500.00  || 2500.00
13/01/2012 || 2000.00 ||         || 3000.00
10/01/2012 || 1000.00 ||         || 1000.00
```

### User Stories

```
As a client 
So that I can keep track of my money
I would like to be able to have a bank account 

As a client 
So that I can add money to my account
I would like to be able to make a deposit

As a client
So that I can take money out of my account 
I would like to be able to make a withdrawal

As a client
So that I can see a history of my account transactions
I would like to be able to print out a bank statement

As a client 
So that I can put my transactions into context
I would like to see a date attached to every transaction
```
