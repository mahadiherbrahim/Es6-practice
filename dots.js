const age = [23, 43, 64, 64, 23, 87];
const age2 = [64, 86, 23, 75];
const age3 = [40, 80, 20, 70];
const allAges = age.concat(age2).concat(5).concat(age3);
const allAges2 = [...age, ...age2, ...age3]
console.log(allAges2);

const takaWala = [232, 500, 342, 600];
const maximum = Math.max(...takaWala);
console.log(maximum);