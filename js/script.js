console.log("Witam serdecznie :)");

const buttonElement = document.querySelector(".article__button");

const hidePhoto = () => {
    const myPhotoElement = document.querySelector(".article__myPhoto");

    myPhotoElement.classList.toggle("hidden");
    buttonElement.innerText = myPhotoElement.classList.contains("hidden") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
}

const initPhoto = () => {
    const buttonElement = document.querySelector(".article__button");

    buttonElement.addEventListener("click", hidePhoto);
}

initPhoto();

const backgroundColorChange = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("newView");
}

const initBackground = () => {
    const themButtonElement = document.querySelector(".themButton");
    themButtonElement.addEventListener("click", backgroundColorChange);
}

initBackground();