//Print "Hello NodeJS" from greetings.txt

const fs = require('fs');

fs.writeFileSync(
    './data/greetings.txt',
    'Hello NodeJS'
);

console.log("File created");

//Read the file and print content.

const data = fs.readFileSync(
    './data/greetings.txt',
    'utf8'
);
console.log(data);

//Appending data

fs.appendFileSync(
    './data/greetings.txt',
    '\nI am learning Playwright'
  
);

console.log("Content Added");

//Importing "mathHelper" and executing it 
const helper = require ('../utils/mathHelper');
console.log(helper.add(2,5));
console.log(helper.multiply(3,3));