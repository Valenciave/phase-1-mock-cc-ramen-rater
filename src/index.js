// write your code here
document.addEventListener("DOMContentLoaded", () => {
    fetch ("http://localhost:3000/ramens")
        .then(response => response.json())
        .then((data) => handleData(data))
});




function handleData(data) {
    console.log(data)




}
