// works the same as reduce, but starts from the end
// reversing a string

const string = "olleH";

const reverseString = (str) => str.split("").reduceRight((x, y) => x + y, "");


console.log(reverseString(string));