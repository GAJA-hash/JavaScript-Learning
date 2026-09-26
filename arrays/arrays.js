
const browsers =["Chrome", "Firefox", "Edge"];
//Accessing elements
console.log(browsers[0]);
console.log(browsers[1]);
console.log(browsers[2]);
console.log(browsers.length);

//Loop through Array
for (const browser of browsers){
    console.log(browser);
}

//Array Methods
//Add Item
browsers.push("Safari");
console.log(browsers);

//Remove Last Item
browsers.pop();
console.log(browsers);


//Exercise 11
console.log("***********************Exercise 11***********************");
const cities = [
    "Bedford",
    "Halifax",
    "Toronto",
    "Vancouver"
];
console.log(cities[0]);
console.log(cities[3]);
console.log(cities.length);

console.log("***********************Exercise 12***********************");
const skills = [
    "Java",
    "Selenium",
    "TestNG",
    "Playwright"
];
console.log("Print using for loop")
for (const skill of skills) {
console.log(skill);
}
