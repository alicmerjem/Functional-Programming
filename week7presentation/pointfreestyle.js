// defines functions w/o explicitly mentioning the arguments

// a regular function would look like this:

const double = x => x*2;

// point freestyle does it this way:

const multiply = a => b => a * b;
const double2 = multiply(2);

// so in a nutshell, we are dealing w/ a bit of currying in point freestyle