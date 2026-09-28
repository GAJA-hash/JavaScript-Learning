//Returns first matching object.
const users = [
    { id: 1, name: "John"},
    { id: 2, name: "Mary"},
    { id: 3, name: "Sam"}
];
const user = users.find(u => u.id ===2);

console.log(user);

//Playwright example:
// const user =
//     users.find(u => u.username === "admin");