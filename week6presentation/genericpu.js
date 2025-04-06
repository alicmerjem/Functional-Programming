// generic partial unity
// a function that partially applies some arguments
// leaves the rest of them open for future
// for this one, we will use closures

function partial(fn) {
    const partialize = (...args1) => (...args2) => {
      for (let i = 0; i < args1.length && args2.length; i++) {
        if (args1[i] === undefined) args1[i] = args2.shift();
      }
      const all = [...args1, ...args2];
      return all.includes(undefined) || all.length < fn.length
        ? partialize(...all)
        : fn(...all);
    };
    return partialize();
  }
  
const make3 = (a, b, c) => `${a}:${b}:${c}`;
const f0 = partial(make3);
const f1 = f0(undefined, 2);
const f2 = f1("A");
const f3 = f2("Z"); //A:2:Z



