console.log("Witam serdecznie :)");

let buttonElement = document.querySelector(".article__button");
let myPhotoElement = document.querySelector(".article__myPhoto");
let themButtonElement = document.querySelector(".themButton");
let container = document.querySelector(".container");

buttonElement.addEventListener("click", () => {
    myPhotoElement.classList.toggle("hidden");

    buttonElement.innerText = myPhotoElement.classList.contains("hidden") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
})

themButtonElement.addEventListener("click", () => {
    container.classList.toggle("newView");
})