import { renderCards } from "./ui.js";

const dbFile = "files/posters.json";


getJsonData();
openMenu();

function getJsonData() {
    fetch(dbFile)
    .then(data => data.json())
    .then(data => renderCards(data));
}



function openMenu() {
    let burgerMenu = document.querySelector(".header__nav img")
    burgerMenu.addEventListener("click", () => {
        let liElements = document.querySelectorAll(".header__nav li:not(:last-child")
        liElements.forEach(liEl => {
        liEl.style.display = "block"
        })
        burgerMenu.style.display = "none"
        let closeBtn = document.querySelector(".closeBtn")
        closeBtn.addEventListener("click", () => {
           burgerMenu.style.display = "block"
           liElements.forEach(liEl => {
            liEl.style.display = "none"
            })
        })
    })
}

let productsInCart = []
function addToCart(btnId, product) {
    if (btnId === product.id) {
        productsInCart.push(product)
    }
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
}

export {addToCart}