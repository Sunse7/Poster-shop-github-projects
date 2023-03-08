import { openMenu } from "./menu.js";

//VARIABLES
let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
let total = 0
//Container for cards
let containerEl = document.querySelector(".cards-container")
//Container for list of items
let cartSumEl = document.querySelector(".sum-container")

openMenu()
renderCards(productsInCart)

//FUNCTIONS
//Render Cards to UI
function renderCards(list) {
  list.forEach(product => {
    let cardEl = document.createElement("section")
    cardEl.setAttribute("class", "card")
    cardEl.innerHTML = `
    <img src="../images/${product.img}">
    <div>
      <h2>${product.name}</h2>
    </div>
    `
    cardEl.appendChild(addBtn(product)) 
    containerEl.appendChild(cardEl)
  });
  renderCart()
}

//Add remove button
function addBtn(product) {
  let btn = document.createElement("button")
  btn.setAttribute("class", "btn")
  btn.setAttribute("id", product.id)
  btn.innerHTML = "Ta bort från varukorg"
  btn.addEventListener("click", (e) => {
    let btnId = e.target.id
    removeFromCart(btnId, productsInCart)
    renderCards(productsInCart)
})
  return btn
}

//Remove item from cart
function removeFromCart(btnId, productsInCart) {
  containerEl.innerHTML = ""
  let index = productsInCart.findIndex(product => product.id === btnId)
  productsInCart.splice(index, 1)
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
  productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
}

//Render list of items in cart in UI 
function renderCart() {
  cartSumEl.innerHTML = " "
  productsInCart.forEach(product => {
    let cartEl = document.createElement("section")
    cartEl.setAttribute("class", "cart-text")
    cartEl.innerHTML = `
    <p>Poster ${product.name}</p>
    <p>1</p>
    <p>${product.price}</p>
    `
    cartSumEl.appendChild(cartEl)
  })
  let totalEl = document.createElement("h5")
  totalEl.innerHTML = `${calcCost(productsInCart)}`
  cartSumEl.appendChild(totalEl)
}


//Calculate sum of items
function calcCost(productsInCart) {
  productsInCart.forEach(product => {
    total += parseInt(product.price)
  })
  return total
}


