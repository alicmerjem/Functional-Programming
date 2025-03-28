// used to add functionality to older browsers that lack newer JS features
// if function is not defined, we will define our version that will be used

if(!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        return this.indexOf(search, start || 0) !==-1;
    };
} 

// this program checks if a string contains a given substring
// we defined a function with search and start parameters
// the functoins returns the position of search in the string (or -1 if not found)
// if indexOf does not return -1, that means search exists in the string
// the start || 0 makes sure that if starting position is not defined, it is automatically set to 0