// Найти элемент по его ID и изменить его текстовое содержимое на "Новый текст".

const words = document.getElementById('words')
words.textContent = "New words"
words.style.color = "red"
words.style.backgroundColor = "yellow"

// Найти элемент по его классу и изменить его цвет фона на синий.
// Создать новый элемент списка с текстом "Новый элемент" и добавить его в конец существующего списка.

const superClass = document.querySelector(".superClass")
superClass.style.backgroundColor = "navy"
superClass.style.color = 'white'

let newElement = document.createElement('p')
newElement.textContent = "new element"
superClass.appendChild(newElement)


// Найти элемент по его классу и удалить его из DOM-дерева.

const removeCl = document.querySelector('.remove')
if(removeCl) {
    removeCl.remove(".remove")
}

// Найти элемент по его ID и изменить его атрибут src на "new.jpg".

const visible = document.getElementById('visible')
if(visible) {
    visible.src = 'new.jpg'
}
console.log(visible.src);


// Найти элемент по его классу и скрыть его, изменив его CSS свойство display.

const displayShow = document.querySelector('.display')
if(displayShow) {
    displayShow.style.display = 'none'
    // displayShow.style.visibility = 'hidden'
}

// Найти кнопку по ее ID и добавить обработчик события click, который изменяет текст кнопки на "Нажата".

const btnBlock = document.getElementById('btnBlock')
const btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
    // btn.textContent = 'Pushed'
    if(btn.textContent === "Pushed") {
        btn.textContent = "Click"
    } else {
        btn.textContent = "Pushed"
    }
})

// Найти элемент по его ID и изменить его HTML-содержимое на "<b>Новый HTML</b>".

const someEl = document.getElementById('someEl')
someEl.innerHTML = "<b>Новый HTML</b>"

// Найти элемент по его ID и добавить к нему новый CSS класс "newClass".

const newCss = document.getElementById('newCss')
newCss.classList.add('newClass')

// Найти элемент по его ID и проверить, содержит ли он CSS класс "active".

const findClass = document.getElementById('findClass')
if(findClass.classList.contains('active')) {
    console.log("Element has an active class");
} else {
    console.log("Element doesnt have class active");
}
