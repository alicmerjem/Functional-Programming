// you have a function that calculates the value added tax (VAT) for an amount
// if you had to apply a single, constant rate, you could 
// curry the addVAT() function to produce a more
// speicalized version that always applied to your given rate

// normal version
const addVAT = (rate, amount) => amount * (1 + rate / 100);

// curried version
const addVATCurried = (rate) => (amount) => amount * (1 + rate / 100);

const addNationalVAT = addVATCurried(6);
addNationalVAT(1500); // output: 1590