//Used to calculate totals.

const numbers = [10,20,30,40];

const total =
    numbers.reduce(
        (sum, number) => sum + number,
        0
    );

console.log(total);

//Real Framework Usage: Count total passed tests:
const results = [5,7,3];

const totalPassed =
    results.reduce(
        (sum, count) => sum + count,
        0
    );

console.log(totalPassed);