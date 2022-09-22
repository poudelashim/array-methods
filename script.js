'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Ashim Poudel',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Anish Poudel',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Dipen Lamichhane',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Preetha Pradhan',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//METHODS

//1. Slice
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
console.log(arr.slice(-3));
console.log(arr.slice([...arr]));
console.log(
  '----------------------------------------------------------------------------------------------'
);
//2.Splice

// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.splice(1, 0, 'Feb'));
// console.log(months);

// console.log(months.splice(4, 1, 'May'));
// console.log(months);

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// remove 0 elements before index 2, and insert drum

// console.log(myFish.splice(2, 0, 'drum'));
// console.log(myFish);

//remove 0 elements before index 2, and insert drum and guitar

console.log(myFish.splice(2, 0, 'drum', 'guitar'));
console.log(myFish);

//remove 1 element at index 3
console.log(myFish.splice(3, 1));

//remove 1 element at index 2, and insert trumpet
console.log(myFish.splice(2, 1, 'trumpet'));
console.log(myFish);

//remove 2 elements from index 0 and insert parrot, anemone, blue
console.log(myFish.splice(0, 2, 'parrot', 'anemone', 'blue'));
console.log(myFish);

//remove 2 elements, starting from index 2
console.log(myFish.splice(2, 2));
console.log(myFish);

//remove 1 elements starting from index -2
console.log(myFish.splice(-2, 1));
console.log(myFish);

//remove all elements, starting form index 1
console.log(myFish.splice(1));
console.log(myFish);
