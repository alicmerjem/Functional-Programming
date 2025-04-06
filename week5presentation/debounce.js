// used to delay execution until user stops triggering

function debounce(fn, delay = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer); // clear any previously set timer
        timer = setTimeout(() => fn(...args), delay); // set a new timre to call the function after the delay
    }
}