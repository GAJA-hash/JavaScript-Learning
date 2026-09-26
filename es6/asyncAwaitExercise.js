async function getCity() {
    return "Bedford";
}

(async () => {

    const city =
        await getCity();

    console.log(city);

})();