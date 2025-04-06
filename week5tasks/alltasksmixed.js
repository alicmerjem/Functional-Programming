// Task 1: Greet and add logging
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Higher-order function that logs arguments and return values
  function addLogging(fn) {
    return function (...args) {
      console.log(`Arguments: ${args}`);
      const result = fn(...args);
      console.log(`Return value: ${result}`);
      return result;
    };
  }
  
  // Test Task 1
  const greetWithLogging = addLogging(greet);
  greetWithLogging("Alice");
  
  // Task 2: Add timing function
  function addTiming(fn, { getTime, output }) {
    return function (...args) {
      const start = getTime();
      const result = fn(...args);
      const end = getTime();
      output(`Execution time: ${end - start}ms`);
      return result;
    };
  }
  
  // Custom getTime and output functions for testing
  const getTime = () => new Date().getTime();
  const output = (message) => console.log(message);
  
  // Recursive factorial function for Task 2
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  const timedFactorial = addTiming(factorial, { getTime, output });
  timedFactorial(10); // Testing execution time of factorial function
  
  // Task 3: Memoize function for Fibonacci optimization
  function memoize(fn) {
    const cache = {};
    return function (n) {
      if (cache[n] !== undefined) {
        return cache[n];
      }
      const result = fn(n);
      cache[n] = result;
      return result;
    };
  }
  
  // Recursive Fibonacci without memoization
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Optimized Fibonacci with memoization
  const memoizedFibonacci = memoize(fibonacci);
  
  console.time('Fibonacci without memoization');
  console.log(fibonacci(40));  // Test without memoization
  console.timeEnd('Fibonacci without memoization');
  
  console.time('Fibonacci with memoization');
  console.log(memoizedFibonacci(40));  // Test with memoization
  console.timeEnd('Fibonacci with memoization');
  
  // Task 4: Once function that runs a function only once
  function once(fn) {
    let called = false;
    return function (...args) {
      if (!called) {
        called = true;
        return fn(...args);
      }
    };
  }
  
  // Test initializer function that only runs once
  function initializer() {
    console.log("This function should only run once.");
  }
  
  const onceInitializer = once(initializer);
  onceInitializer(); // Runs
  onceInitializer(); // Doesn't run
  
  // Task 5: Negate a predicate
  function not(fn) {
    return function (...args) {
      return !fn(...args);
    };
  }
  
  // Example predicate to filter non-negative balances
  function isNonNegative(account) {
    return account.balance >= 0;
  }
  
  // Array of accounts to filter
  const accounts = [
    { name: "Alice", balance: 500 },
    { name: "Bob", balance: -100 },
    { name: "Charlie", balance: 300 }
  ];
  
  // Filter using not to exclude non-negative balances
  const nonNegativeAccounts = accounts.filter(not(isNonNegative));
  console.log(nonNegativeAccounts);
  
  // Task 6: Unary, Binary, and Ternary functions
  function arity(n, fn) {
    return function (...args) {
      return fn(...args.slice(0, n));
    };
  }
  
  // Unary: Accepts 1 argument
  function unary(fn) {
    return arity(1, fn);
  }
  
  // Binary: Accepts 2 arguments
  function binary(fn) {
    return arity(2, fn);
  }
  
  // Ternary: Accepts 3 arguments
  function ternary(fn) {
    return arity(3, fn);
  }
  
  // Test with unary(parseInt) to fix parseInt bug
  const parseIntUnary = unary(parseInt);
  const parsedNumbers = ["10", "20", "30"].map(parseIntUnary);
  console.log(parsedNumbers); // Fixes parseInt bug
  
  // Task 7: Debounce function
  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  
  // Test debounce with simulated keypress (autocomplete)
  function handleKeypress(event) {
    console.log(`Key pressed: ${event.key}`);
  }
  
  const debouncedKeypress = debounce(handleKeypress, 300);
  
  // Simulate keypress events
  debouncedKeypress({ key: "A" });
  debouncedKeypress({ key: "B" });
  debouncedKeypress({ key: "C" }); // Only the last keypress should trigger after 300ms
  
  // Task 8: Methodize function
  function methodize(obj, fn) {
    obj[fn.name] = function (...args) {
      return fn.apply(obj, args);
    };
  }
  
  // Reverse function for Task 8
  function reverse(str, dashed = false) {
    let reversed = str.split('').reverse().join('');
    return dashed ? reversed.split('').join('-') : reversed;
  }
  
  // Add reverse as a method to String.prototype
  methodize(String.prototype, reverse);
  
  // Test reverse method with dashed option
  console.log("ABC".reverse(true)); // A-B-C
  console.log("ABC".reverse(false)); // CBA
  