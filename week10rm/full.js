// functions
function sayHi(name) {
    console.log("Hi " + name);
}

sayHi(Merjem);


// objects and parameters
const user = {
    name: "Merjem",
    age: 20
}

console.log(user.name);


// callback - function is a parameter to another function
function doMath(num, callback) {
    const result = num * 2;
    callback(result); // its up to the caller what to do with it
}

doMath(5, function(answer) {
    console.log("The answer is: ", answer);
});



// fetch (modern ajax replacement)
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data: ", data);
    })
    .catch(error => {
        console.log("Something went wrong", error);
    });


// rebuilding the facade pattern using fetch
function getData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data)) // success
        .catch(error => callback(error, null)); // error
}


// example usage
 getData("https://jsonplaceholder.typicode.com/posts", function(err, result) {
    if (err) {
        console.error("Oops", err);
    } else {
        console.log("Got data: ", result);
    }
 }); 