const api_url = 'https://www.officeapi.dev/quotes/random';
async function getDunder() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

//Fetch Dunder Mifflin Data and place in div
window.addEventListener("load", async function () {
    const dunderMifflin = await getDunder();
    const cardContainer = window.document.querySelector("div#output");
    cardContainer.classList.add("")
    dunderMifflin.forEach((element) => {
        
    })
})
