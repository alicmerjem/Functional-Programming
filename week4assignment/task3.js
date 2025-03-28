// given an array of account objects, write a function filterNegativeBalances(accounts) that returns an array contianing only accounts with a negative balance

const accounts = [
    {id: "A1", balance: 100},
    {id: "A2", balance: -50},
    {id: "A3", balance: -30}
];

const filterNegativeBalances = (accounts) => accounts.map(balance => balance < 0);