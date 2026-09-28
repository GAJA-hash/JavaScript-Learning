const fs = require('fs');

fs.appendFileSync(
    './data//output.txt',
    '\nSecond Line'
);

console.log("Content Added");