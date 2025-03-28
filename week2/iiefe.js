// we are defining a function and calling it right away to that it gets executed on the spot
// function runs immediately after definition to avoid polluting the global scope

(function() {
    console.log("This runs immediately!");
})();