//Read the file and print content.
const fs = require('fs');

const good = fs.readFileSync(
    './data/assignment.txt',
    'utf8'
)
console.log("good");

//Write new file
const newfl = fs.writeFileSync(
    './data/assignment1.txt',
    'my assignment'
)
console.log("I can do it!")

//Append context
const appnd = fs.appendFileSync(
    './data/assignment1.txt',
    '\n my next line'
)
console.log("Appended");

//Read JSON
const readF = require('../assignments/users.json');
const path = require('path');
readF.forEach(read => console.log(read.Name));

//Use path module
const filePath = path.join(
    __dirname,
    '../data/assignment1.txt'
)

console.log(filePath);

//Read environment variable
console.log(process.env.USER);

//Run -> $env:USER="Gajapathi"

