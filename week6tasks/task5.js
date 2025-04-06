// Original logging function that logs based on severity level
function myLog(severity, logText) {
    // Define how to handle different severity levels
    switch (severity) {
      case "NORMAL":
        console.log(`[NORMAL] ${logText}`);
        break;
      case "WARNING":
        console.warn(`[WARNING] ${logText}`);
        break;
      case "ERROR":
        console.error(`[ERROR] ${logText}`);
        break;
      default:
        // Default to console.log for unknown severity
        console.log(`[UNKNOWN] ${logText}`);
    }
  }
  
  // Generic curry function that supports multiple arguments
  function curry(fn) {
    return function curried(...args) {
      // If enough arguments are provided, call the original function
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        // Otherwise, return a function that keeps accepting arguments
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
  }
  
  // Create curried version of myLog
  const curriedLog = curry(myLog);
  
  // Create reusable logger functions with fixed severity
  const myNormalLog = curriedLog("NORMAL");
  const myWarningLog = curriedLog("WARNING");
  const myErrorLog = curriedLog("ERROR");
  
  // Use the specialized loggers
  myNormalLog("All systems go.");     // [NORMAL] All systems go.
  myWarningLog("Low battery.");       // [WARNING] Low battery.
  myErrorLog("System failure.");      // [ERROR] System failure.
  