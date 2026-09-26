console.log("***Without async/await***");
// Define a Promise
const myPromise = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully!");
});

myPromise.then(result => {
    console.log(result);
});

//with async/await
console.log("***With async/await***");

async function fetchResult() {
    const result = await myPromise;
    console.log(result);
}
fetchResult();


console.log("***another example With async/await***");
async function getUser() {
    return "Admin";
}

(async () => {

    const user =
        await getUser();

    console.log(user);

})();