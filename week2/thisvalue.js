// this refers to the object that is currently executing the code
// arrow functions DO NOT have their own this context

function showName(name) {
    this.name = name;
    setTimeout(() =>
    console.log(this.name), 1000);
}

new showName("Alice"); // shows the name Alice after a 1000 seconds
