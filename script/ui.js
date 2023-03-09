import { addToCart } from "./script.js"

function renderCards(list) {
  let containerEl = document.querySelector(".cards-container")
  list.forEach(product => {
    let cardEl = document.createElement("section")
    cardEl.setAttribute("class", "card")
    cardEl.innerHTML = `
    <img src="images/${product.img}">
    <div>
      <h2>${product.name}</h2>
      <p>${product.desc}</p>
    </div>
    `
    cardEl.appendChild(addBtn(product)) 
    containerEl.appendChild(cardEl)
  });
}

function addBtn(product) {
  let btn = document.createElement("button")
  btn.setAttribute("class", "btn")
  btn.setAttribute("id", product.id)
  btn.innerHTML = "Oh, take my money!"
  btn.addEventListener("click", (e) => {
    console.log("click")
    let btnId = e.target.id
    addToCart(btnId, product)
})
  return btn
}

export  {renderCards}