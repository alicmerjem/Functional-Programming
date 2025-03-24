// iterates through array w/o creating a new array
// logging values

const students = ["Alice", "Bob", "Charlie"];

students.forEach((student, index) => {
    console.log("Student " + (index + 1) + ": " + student);
});