console.log("***creating and printing array*****");

let browsers = ["Chrome", "Firefox", "Edge"];
console.log(browsers);
console.log(browsers[0]);
for (browser of browsers){
    console.log(browser);
}
console.log("***creating and printing object*****");

let myProfile = {
    name: "Gajapathi",
    role: "Senior SDET"
}
console.log(myProfile.name);
console.log(myProfile.role);

console.log(myProfile)

console.log("***Print using template literals***");
const {name, role} = myProfile;     //Used Destructuring
console.log(`${name} works as ${role}`)

console.log("***Create arrow function*****");
const square = num => num * num;
console.log(`Square of 6 = ${square(6)}`);

console.log("***Create async function*****");

async function getFramework(){
    return "Playwright";
}

(async () => {
    const tool = await getFramework();
    console.log(tool);
})();





