console.log("without function")
console.log(10 + 20);
console.log(30 + 40);
console.log(50 + 60);

console.log("with function")
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(30, 40));
console.log(add(50, 60));


//Exercise 9
console.log("Square of number")
function square(num){
    return num * num
}

console.log(square(9));
console.log(square(3));

//Exercise 10
console.log("is Adult calculator")
function isAdult(age){
    if (age >= 25) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isAdult(15));