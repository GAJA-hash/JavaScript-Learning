//Returns only matching elements.
const numbers = [10,20,30,40,50];

const result = numbers.filter(num => num > 25);

console.log(result);

//Automation example
const users = [
    { name: "John", active: true},
    { name: "Sam", active: false},
    { name: "Mary", active: true}
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//to print inactive users
//Option 1: explicit comparison
const inactiveUsers = users.filter(user => user.active === false);
//Option 2 negate with !
// const inactiveUsers = users.filter(user => !user.active);
console.log(inactiveUsers);

