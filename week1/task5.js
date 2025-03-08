// spread operator
// merging 2 arrays, duplicating the values

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

function mergeArr(array1, array2) {
    let unique = new Set([...arr1, ...arr2]);
    return [...unique];
}

console.log(mergeArr(arr1, arr2));

// output: [1, 2, 3, 4, 5]