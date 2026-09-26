const employee = {
    name: "Gajapathi",
    role: "SDET"
};
console.log("***Without destructuring*****");
console.log(employee.name);
console.log(employee.role);

console.log("***With destructuring*****");
const { name, role } = employee;
console.log(name);
console.log(role);

console.log("***Array Destructuring***")
const browsers = [
    "Chrome",
    "Firefox",
    "Edge"
];
console.log("***Without array destructuring*****");
console.log(browsers[0]);
console.log(browsers[1]);

console.log("***With Array Destructuring***")
const [first, second] = browsers;

console.log(first);
console.log(second);