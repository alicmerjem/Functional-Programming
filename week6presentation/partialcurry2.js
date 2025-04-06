const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;
const pc = partialCurry(nonsense);

const step1 = pc(9, 22);
const step2 = step1(60);
const result = step2(12, 4);
console.log(result); // 9/22/60/12/4