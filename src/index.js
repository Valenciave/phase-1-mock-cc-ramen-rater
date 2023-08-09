const ramenUrl = `http://localhost:3000/ramens`

function getRamen(apiLink) {
    return fetch(ramenUrl).then((r) => r.json()) };
    
const ramenResponse = getRamen(ramenUrl)
ramenResponse.then((ramen) => {
    for (let i = 0; i < ramen.length; i++) {
        const ramenMenu = document.querySelector("#ramen-menu");
        const image = document.createElement("img");
        image.src = ramen[i].image;
        ramenMenu.append(image);

        //console.log(ramen[i])
}
});
function renderRamenDetails(ramen) {
const ramenDetailDiv = document.querySelector("#ramen-detail");
        const ramenName = querySelector("#name");
        ramenName.textContent = ramen[i].name;
        ramenDetailDiv.appendChild(ramenName);
};