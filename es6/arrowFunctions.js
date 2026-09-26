console.log("*****Traditional function******");
function add(a,b) {
    return a +b;
}

console.log("*****Arrow function******");
const add1 = (a,b) => {
    return a + b;
}
console.log("******Short Form*******");
const add2 = (a,b) => a+b;

const square = num => num * num;

console.log(square(5));

//Exercise 16
const multiply = (a,b) => a * b;

console.log(` 4 x 5 =  ${multiply(4,5)}`);

