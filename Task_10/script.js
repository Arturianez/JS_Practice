
// 1) Напишите функцию greet(name), которая принимает параметр name и выводит в консоль сообщение приветствия, 
// например, "Привет, Алексей!".
// Добавьте кнопку на веб-страницу, при нажатии на которую, пользователю предлагается ввести свое имя в prompt. 
// Введенное имя передается в функцию greet, и сообщение выводится в консоль.

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function() {
//     let name = prompt("Please, print your full name", "Your name")
//     if(name !== null && name !== "") {
//         greet(name)
//     }
// })

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }


// 2)Напишите функцию add(a, b), которая принимает два параметра a и b и возвращает их сумму.
// Создайте HTML-форму с двумя полями ввода и кнопкой. При нажатии на кнопку, 
// считывайте значения полей ввода, передавайте их в функцию add и отображайте результат на странице.

// function add(a,b) {
//     return console.log(a+b);
// }
// const btn = document.querySelector('.btnNumbers')
// const input1 = document.getElementById("a")
// const input2 = document.getElementById("b")

// btn.addEventListener('click', function() {
//     const num1 = parseFloat(input1.value)
//     const num2 = parseFloat(input2.value)
    
//     if(!isNaN(num1) && !isNaN(num2)) {
//         add(num1,num2)
//     }
// })


// 3)Напишите функцию changeBackgroundColor(color), которая принимает параметр color и изменяет цвет фона страницы на указанный.
// Создайте несколько кнопок на странице, каждая из которых вызывает функцию changeBackgroundColor 
// с разными цветами в качестве параметра.

// const btnRed = document.querySelector(".red")
// const btnNavy = document.querySelector(".navy")

// btnRed.addEventListener('click', function() {
//     changeBackgroundColor("red")
//     // if(btnRed) {
//     //     document.body.style.backgroundColor = "red"
//     // }
// })
// btnNavy.addEventListener('click', function() {
//     changeBackgroundColor("navy")
//     // if(btnNavy) {
//     //     document.body.style.backgroundColor = "navy"
//     // }
// })

// function changeBackgroundColor(color) {
//     document.body.style.backgroundColor = color
// }


// 4)Напишите функцию countCharacters(str), которая принимает строку str и возвращает количество символов в этой строке.
// Создайте текстовое поле и кнопку. При нажатии на кнопку, считывайте текст из поля, 
// передавайте его в функцию countCharacters, и отображайте результат на странице.

// const str = document.getElementById('text')
// const btnText = document.querySelector('.btnText')

// btnText.addEventListener('click', function() {
//     if(btnText) {
//         countCharacters(str.value)
//     }
// })

// function countCharacters(num) {
//     word = num.length;
//     console.log(word);
// }


// 5)Напишите функцию createList(items), которая принимает массив строк items и создает из них список <ul>, добавляя его в DOM.
// Создайте форму с текстовым полем и кнопкой "Добавить". Пользователь может вводить элементы списка по одному, 
// и после нажатия на кнопку новый элемент добавляется в массив, который передается в createList.

const arrStr = ["one","two","three","four","five"]
const input = document.getElementById('input')
const btn = document.querySelector('.btn')
const listOfArr = document.querySelector('.listOfArr')

btn.addEventListener('click', function() {
    const newInput = input.value
    console.log("Input value is: ",newInput);
    var liElement = document.createElement('li')
    var ulElement = document.createElement("ul")
    liElement.textContent = newInput
    ulElement.appendChild(liElement)
    listOfArr.appendChild(ulElement)  
})

function createList(items) {
    console.log(items);
    var ulElement = document.createElement("ul")
    items.forEach(item => {
        var liElement = document.createElement('li')
        liElement.textContent = item
        ulElement.appendChild(liElement)
    });
    listOfArr.appendChild(ulElement)
}
createList(arrStr)


// 6)Напишите функцию startCountdown(seconds), которая принимает количество секунд и 
// каждую секунду обновляет значение на странице, пока не дойдет до нуля.
// Создайте кнопку на странице, при нажатии на которую пользователь вводит количество секунд в prompt, 
// и запускается обратный отсчет, который отображается на странице.

// function startCountdown(seconds) {

// }
// startCountdown()

// 7)Напишите функцию filterArray(arr, callback), которая принимает массив arr и функцию обратного вызова callback. 
// Функция должна возвращать новый массив, содержащий только те элементы, для которых callback возвращает true.
// Создайте форму с текстовым полем для ввода чисел (через запятую) и кнопкой "Фильтровать четные". 
// При нажатии на кнопку считывайте введенные числа, создавайте массив, передавайте его в filterArray с функцией обратного вызова, 
// которая фильтрует четные числа, и отображайте результат на странице.


// 8)Напишите функцию changeText(elementId, newText), которая принимает ID элемента и новый текст, 
// и заменяет текст внутри элемента на странице.
// Создайте несколько элементов с текстом на странице и кнопки "Изменить текст". 
// При нажатии на кнопку введите новый текст в prompt, и измените текст соответствующего элемента с помощью changeText.


// 9)Напишите функцию sortArray(arr), которая принимает массив чисел и возвращает его отсортированную копию.
// Создайте текстовое поле и кнопку "Сортировать". При нажатии на кнопку считывайте введенные числа (через запятую), 
// создавайте массив, сортируйте его с помощью sortArray, и отображайте отсортированный массив на странице.


// 10)Напишите функцию toggleVisibility(elementId), которая принимает ID элемента и переключает его видимость 
// (если элемент видим, скрывает его, если скрыт — показывает).
// Создайте несколько элементов с текстом и кнопки "Показать/Скрыть". 
// Каждая кнопка должна переключать видимость соответствующего элемента при нажатии.