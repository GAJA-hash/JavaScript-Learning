//Hardcoded paths are dangerous. 
// Bad-> 'C:/Users/Gajapathi/file.txt'
// Use-> path.join()

const path = require('path');

const filePath = path.join(
    __dirname,
    '../data/sample.txt'
);

console.log(filePath);