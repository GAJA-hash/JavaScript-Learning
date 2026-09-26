const myPromise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Success");
    }, 2000);

});

myPromise.then(result => {
    console.log(result);
});