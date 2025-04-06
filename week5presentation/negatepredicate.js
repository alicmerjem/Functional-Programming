// checks if balance is negative
const isNegativeBalance = (v) => v.balance < 0;

// higher order function
// takes fn as input
// when called, will negate the result of fn
const not = (fn) => (...args) => !fn(...args);

// the function uses filter method on accountsdata to excljude accounts with negative balances
const notDeliquent3 = serviceResult.accountsData.filter(not(isNegativeBalance));