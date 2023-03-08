function renderSmallCards(list) {
  let containerEl = document.querySelector(".cards-container--small")
  let size = "card--small"
  renderCards(list, size, containerEl)
}

function renderLargeCards(list) {
  let containerEl = document.querySelector(".cards-container--large")
  let size = "card--large"
  renderCards(list, size, containerEl)
}

function renderCards(list, size, containerEl) {
  list.forEach(product => {
    let cardEl = document.createElement("section")
    cardEl.setAttribute("class", "card")
    cardEl.classList.add(size)
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

export {renderSmallCards, renderLargeCards}