const students = [
    { name: "Osman", grade: 85 },
    { name: "Sena", grade: 55 },
    { name: "Ismet", grade: 72 },
    { name: "Rile", grade: 40 },
];

// Imperative function - grade > 60
function filterStudentsImperative(students) {
    let filtered = [];

    for (var i = 0; i < students.length; i++) {  // Corrected loop condition
        if (students[i].grade >= 60) {
            filtered.push(students[i]);
        }
    }

    return filtered;
}

console.log("Using imperative approach we get: ", filterStudentsImperative(students));  // Call the function

// Declarative approach
const filterDeclarative = (students) => students.filter(student => student.grade >= 60);

console.log("Using declarative approach we get the following: ", filterDeclarative(students));  // Corrected log
