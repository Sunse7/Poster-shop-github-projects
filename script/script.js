import { renderCards } from "./ui.js";
import { openMenu } from "./menu.js";

const dbFile = "files/posters.json";
const productsInCart = []


getJsonData();
openMenu();

//Fetch data
function getJsonData() {
    fetch(dbFile)
    .then(data => data.json())
    .then(data => renderCards(data));
}

//Add item to cart
function addToCart(btnId, product) {
    if (btnId === product.id) {
        productsInCart.push(product)
    }
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
}

export {addToCart}