//Creating objects
console.log("******Creating objects******");

const employee = {
    name: "Gajapathi",
    role: "SDET",
    experience: 10
};

//Method 1
console.log("******Method 1******");
console.log(employee.name);

//Method 2
console.log("******Method 2******");
console.log(employee["role"]);

//Modify property
console.log("******Method Property******");
employee.experience = 11;
console.log(employee.experience);
console.log("******Print all values in object******");
console.log(employee);

console.log("***********************Exercise 13***********************");
const book = {
    title : "Playwright Mastery",
    author: "Microsoft",
    pages: 500
};
console.log(book.title, book.author, book.pages);
console.log(book);

//Objects indise arrays
console.log("******Objects inside arrays******");
const users = [
    {
        name: "admin",
        age: "35"
    },
    {
        un: "user",
        age: "23"

    }
];
//Access
console.log(users[0].name);

console.log("***********************Exercise 14 - Print both usernames using a loop.***********************");
for (const user of users){
    console.log(user.name);
    console.log(user.age);
}
console.log("******Access******")
console.log(users[0].name);