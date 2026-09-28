
const numbers = [10,20,30,40,50];
//Use foreach to print all values

numbers.forEach(number =>{
    console.log(number)
})

//Use map to return array [20,40,60,80,100]

const mul = numbers.map(num => num * 2);
console.log(mul);

//Use filter to return [30,40,50]
const filt = numbers.filter(num => num >= 30);
console.log(filt);

//Find 30
const x = numbers.find(num => num === 30);
console.log(x)

//Use reduce to find total
const tot = numbers.reduce((acc, count) => acc + count)
console.log(tot)

//Use destructuring
const profile = 
    {
    name: "Gajapathi",
    role: "Automation Engineer",
    city: "Bedford"
}
const{name, role, city}= profile;
console.log(name);
console.log(role);

//read json

const users = require("./users.json");
console.log(users);

