# Bank tech test
<a href="https://codeclimate.com/github/Sindex42/bank-tech-test/maintainability"><img src="https://api.codeclimate.com/v1/badges/7de4a61e8fe775e1f1de/maintainability" /></a>

An example banking app written in Javascript during week 10 at Makers Academy. Interaction with the app is through the browser console.

## Getting started

1. Clone this repo `git clone git@github.com:Sindex42/bank-tech-test.git`
2. Change directory `cd bank-tech-test`
3. Run npm to install dependencies `npm install`

### Testing and Coverage

1. Run tests with Jasmine `open SpecRunner.html`
2. Generate code coverage with Istanbul through Karma `karma start`
3. Locate the file in the coverage folder
4. Open the index.html file in Chrome

### Usage

- In the same SpecRunner browser window, open up the console e.g. in Chrome:  
  `ctrl + shift + J` (windows) or 
 `cmd + option + J` (mac)

![Imgur](https://i.imgur.com/SPRuhRU.png)

## Approach

1. Created some user stories from the specifications (see below).
2. Rough diagramming to help define the structure.
3. Initially decided to split up the task into 4 classes: Account, Transaction, TransactionHistory and Statement.
4. Renamed the Statement class to TransactionHistory to better reflect its purpose. 
5. Merged TransactionHistory with Statement to finish the statement printing
6. Refactored printStatement function into multiple methods to adhere to SRP

## Reflections

- TransactionHistory is still responsible for printing the statement. This should be extracted into its own class 
- Need to implement Date injection into transactionHistory or Statement to be able to control the date in the integration tests. This could be done by injecting a mocked class that would receive 'new' and return a user defined object
- Could store the statement header in its own file and import it a a constant


## User Stories

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

