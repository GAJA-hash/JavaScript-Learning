//Modules - Large apps split code into modules.  (SIMILAR TO METHODS IN JAVA)

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;                  //we can use the same variable names (a,b) under different functions
}

function mul(c,d){
    return c * d;
}

function div(a,b){
    return a/b;
}

module.exports = {
    add, sub, mul, div
};