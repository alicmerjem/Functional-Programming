// having a curry() function lets us fix some arguments while leaving others still open

function myLog(severity, text) {
    console.log(`[${severity}] ${text}`);
}

const curry = (fn) => (...args) => 
    args.length >= fn.length ? 
    fn(...args) :
    (...rest) => curry(fn)(...args, ...rest);


const logNormal = curry(myLog)("NORMAL");
logNormal("All systems go");