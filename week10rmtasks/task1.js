// implement a facade
// a hard to use date formatting library exposes multiple
// confusing functions
// wrap it using a simpler API

// provided legacy interface (example)
function legacyFormat(dateObj) {
    return `${dateObj.getDate()}-${dateObj.getMonth() +  1}-${dateObj.getFullYear()}`;
}

// out task is to create a wrapper function that hides the complex stuff
// and we need to return a nice DD-MM-YYYY string

export const formatDate = (date) => {
    // call the legacy function under the hood
    return legacyFormat(date);
}

// if we were to test this in a separate file:
import { formatDate } from './task1.js';

const today = new Date();
console.log(formatDate(today));