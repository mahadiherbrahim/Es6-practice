// function sum(num1, num2) {
//     return num1 + num2;
// }
// const result = sum(10, 20);
// console.log(result);#

// const doubleIt = function(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num * 2;
const result = doubleIt(10);
console.log(result);

const tripleIt = (x, y) => x + y;
const result2 = tripleIt(10, 20);
console.log(result2);


const giveNum = () => 5;
console.log(giveNum());

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
};

const result3 = doMath(10, 5);
console.log(result3);