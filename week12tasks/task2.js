// create a function safeProp(obj, prop)
// it will return a maybe of the property

function safeProp(obj, prop) {
    return obj != null && obj.hasOwnProperty(prop) && obj[prop] != null
        ? Maybe.just(obj[prop])
        : Maybe.nothing();
}

// example usafe
const user = {name: "Alice", age: 19};

const maybeAge = safeProp(user, "age");
const maybeCity = safeProp(user, "city");

console.log(maybeAge instanceof Just ? "Age: " + maybeAge.value : "No age.");
console.log(maybeCity instanceof Just ? "City: " + maybeCity.value : "No city.");