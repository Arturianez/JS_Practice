const modal = document.querySelector(".modal")
const modal_content = document.querySelector(".modal_content")
const createBtn = document.querySelector(".createBtn")
const btnClose = document.querySelector(".btnClose")

createBtn.addEventListener('click', function() {
    modal.style.display = "block"
})
btnClose.addEventListener('click', function() {
    modal.style.display = "none"
})
