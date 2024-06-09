const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modal_content = document.querySelector('.modal_content')
const close = document.querySelector('.close')

btn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)

function openModal() {
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

function helloUser(name) {
    return "Hello " + name;
}
console.log(helloUser("Tom"));
console.log(helloUser);