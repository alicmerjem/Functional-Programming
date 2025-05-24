// picking a random number

// w/o dependency, hard to test
function pickRandom1(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// w/ dependency
function pickRandom2(arr, rng) {
    const index = Math.floor(rng() * arr.length);
    return arr[index];
}

// test
const half = () => 0.5; // always returns 0.5
console.assert(pickRandom([10, 20, 30, 40], half) === 30, "With rng fixed at 0.5, should pick the middle element (30)");