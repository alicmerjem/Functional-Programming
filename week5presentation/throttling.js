const throttle = (fn, delay = 1000) => {
    let timer;
    return (...args) => {
        if (!timer) { // checks if the function is already being throttled
            timer = setTimeout(() => { // set timeout to reset the timer after the delay
                timer = undefined; // clear the time after delay milliseconds
            }, delay);
            fn(...args); // call the function
        }
    };
};