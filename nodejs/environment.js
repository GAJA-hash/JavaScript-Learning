//Never store:
// username
// password
// token
// in source code

// Instead: process.env

console.log(process.env.USERNAME);

//Run -> $env:USERNAME="Gajapathi"
// node nodejs/environment.js