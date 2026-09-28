//Find name = "Sam" from an array of user objects.

const users = [
    { id: 1, name: "John"},
    { id: 2, name: "Mary"},
    { id: 3, name: "Sam"}
];

const user = users.find(u => u.name = "Sam");
console.log(user);