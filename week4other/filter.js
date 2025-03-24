// creates a new array w/ elements that match the condition
// filtering negative balances

const accounts = [
    {id: "A1", balance: -50},
    {id: "A2", balance: 100},
];

const deliquent = accounts.filter(v => v.balance < 0);
console.log(deliquent);