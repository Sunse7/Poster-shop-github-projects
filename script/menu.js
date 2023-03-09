//Open and close menu
export function openMenu() {
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