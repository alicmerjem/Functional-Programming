// refactor the following to use monads:

//**
// const result = fn1(x);
// if (result) {
//      const next = fn2(result);
//      if (next) {
//          return fn3(next);
//        }  
//      }
// return null
// */

// refactored:
return Maybe.of(x)
    .map(fn1)
    .map(fn2)
    .map(fn3)
    .valueOf();