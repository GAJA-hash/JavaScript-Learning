// previously we used "require' to read only json, here we are reading text file"
const fs = require('fs');                    

const data = fs.readFileSync(
    './data/sample.txt',
    'utf8'
);
console.log(data);
