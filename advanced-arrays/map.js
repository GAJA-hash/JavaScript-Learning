//Transforms data and returns a new array.
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log(squares);

//Real Automation Example
const users = [ 
    { name: "John"},
    { name: "Mary"},
    { name: "Sam"}
];
const names = users.map(user => user.name);

console.log(names);