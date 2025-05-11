// maybe functor
// safely handling null and undefined values without crashing the whole program

// so if we were do to this: 

null + 1; // gives you 1 but sometimes weird results

// or even worse:

null.something; // type error: cannot read property

// you risk bugs
// maybe functor protects us from all of this

// maybe functor has 2 variants:
// 1 - Just(value) when you have a valid value
// 2 - Nothing() when the value is null or undefined

// example: 
Maybe.of(2290).map(x => x + 1).map(x => x + 1);
// output: Just(2211)

// another example: 
Maybe.of(null).map(x => x + 1);
// output: Nothing() 