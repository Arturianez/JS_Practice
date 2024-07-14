// города, штаты страны. сделать всё буквы в верхнем регистре
// const newArr = {
//     city: ["New York", "Chicago", "Houston"],
//     states: ["Utah", "Montana", "Illinois"],
//     countries: ["England", "Scotland", "Norway"],
//     numbers: [12, 66, 78, 109],
// }

// function upperCaseUpdate(arr) {
//     return arr.map((element) => {
//         if (typeof element === "string") {
//            return element.toUpperCase()
//         } else {
//              return element; 
//         }
//     }
//     )
// }

// console.log(upperCaseUpdate(newArr.city));
// console.log(upperCaseUpdate(newArr.states));
// console.log(upperCaseUpdate(newArr.countries));
// console.log(upperCaseUpdate(newArr.numbers));


// // Создать массив объектов, где каждый объект содержит число и его квадрат.
// function getSquareNumbers(arr) {
//     return arr.map((element) => Math.pow(element, 2))
// }
// console.log("Квадрат числа: ", getSquareNumbers(newArr.numbers));


// // Создать массив строк в обратном порядке и в верхнем регистре.
// function reverseArray(arr) {
//     arr.reverse()
//     return arr.map((element) => {
//         return upperWords = element.toUpperCase()
//     })
// }
// console.log("Массив в обратном порядке + UpperCase ", reverseArray(newArr.city));


// Отфильтровать массив объектов, оставив только те, у которых свойство age больше 30.
// const people = [
//     {   
//         name: "Tom",
//         city: "NYC",
//         age: 29
//     },
//     {
//         name: "Sirius",
//         city: "LA",
//         age: 41
//     },
//     {
//         name: "Tom",
//         city: "Miami",
//         age: 30
//     }
// ]

// function filterObj(arr) {
//     return arr.filter((element) => {
//         if(element.age >= 30) {
//             return element;
//         }
//     })
// }
// console.log(filterObj(people));

// Создать новый массив, содержащий только первые три элемента исходного массива.
// Перемножить все числа в массиве.
// Создать массив, содержащий длины строк из исходного массива строк.
// Отфильтровать массив чисел, оставив только те, которые больше 10, а затем создать массив их квадратов.
// Создать массив, где каждый элемент является суммой соседних элементов исходного массива.
// Создать массив объектов, где каждый объект содержит строку и количество символов в ней.
// Отфильтровать массив объектов, оставив только те, у которых есть свойство active, равное true, а затем создать массив их id.
// const someWords = ["ger","top","rich","land","afd","robert",1]
// const numbers = [1,23,67,2,9]
// const arrObj = [
//     {
//         id:134,
//         city: "NYC",
//         code: 11234,
//         active: true
//     },
//     {
//         id: 854,
//         city: "LA",
//         code: 20321,
//         active: false
//     },
//     {
//         id:998,
//         city: "Miami",
//         code: 76324,
//         active: true
//     }
// ]
// function returnElements(arr) {
//     return arr.slice(0,3)
// }
// function multiplication(arr){
//     return arr.reduce((a,b) => a*b)
// }
// function countLenght(arr) {
//     return arr.map((element) => {
//         if( typeof element === "string") {
//             return element.length;
//         } else {
//             return "Это число";
//         }
//     })
// }
// function filterAndSquare(arr) {
//     return arr
//         .filter((element) => element > 10)
//         .map((element) => Math.pow(element, 2))
// }
// function sumNeighbours(arr) {
//     let result = [];
//     for( i = 0; i < arr.length; i++) {
//         if( i < 1 ) {
//             result.push(arr[i]+arr[i+1])
//         } else if(i === arr.length - 1) {
//             result.push(arr[i]+arr[i-1])
//         } else {
//             result.push(arr[i]+arr[i-1]+arr[i+1])
//         }
//     }
//     return result;
// }
// function countLettersLength(arr) {

// }
// function createID(arr) {
//     return arr
//     .filter((element) => element.active === true)
//     .map((element) => {
//         return element.id;
//     })
// }

// console.log("Первые 3 индекса: ", returnElements(someWords));
// console.log("Перемноженные числа массива ",multiplication(numbers));
// console.log("Длинны строк каждого индекса ", countLenght(someWords));
// console.log("Числа больше 10, возведенные в квадрат ", filterAndSquare(numbers));
// console.log("Каждый элемент сумма его соседних: ", sumNeighbours(numbers));
// console.log("Строка и кол-во символов ", countLettersLength(someWords));
// console.log("Есть свойство active и их id будут: ", createID(arrObj));

const container = document.querySelector('.container')
const titlePost = document.createElement('h2')
const listToDos = document.createElement("ul")

listToDos.classList.add("toDos")
titlePost.innerText = "Posts"

container.append(titlePost)
container.append(listToDos)


async function getToDos() {
    const link = `https://jsonplaceholder.typicode.com/todos`
    try {
        const response = await fetch(link)
        const toDos = await response.json()
        console.log("Общий массив: ", toDos);

        toDos
        .filter((element) => element.completed === true)
        .forEach((element) => {
                const post = document.createElement("li")
                const text = document.createElement("p")
                const description = document.createElement("p")
                const catPhoto = document.createElement("img")

                post.append(text)
                listToDos.append(post)

                text.innerHTML = element.title
                description.innerHTML = "Это юзеры до №5"

                if(element.userId <= 5) { 
                    const left_block = document.createElement("div")
                    left_block.classList.add("titleDes")

                    left_block.append(text,description)

                    post.append(left_block)
                    
                }
                catPhoto.setAttribute("src", "./img/cat_girl1.jpg")
                post.append(catPhoto)
            })



    } catch (error) {
        console.error(error);
    }
}
getToDos()
