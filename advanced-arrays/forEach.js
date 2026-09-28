const browsers = ["Chrome", "Firefox", "Edge"];
console.log("Traditional for loop")
for (const browser of browsers){
    console.log(browser);
}

console.log("Using For each loop")

browsers.forEach(browser =>{
    console.log(browser);
});