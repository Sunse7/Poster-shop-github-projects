

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
      <button class="btn">Oh, take my money!</button>
    </div>
    `
    containerEl.appendChild(cardEl)
  });
  
}

export  {renderCards}