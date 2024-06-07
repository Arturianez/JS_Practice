// Функция приветствия:
// Напишите функцию greet(name), которая принимает имя пользователя и выводит сообщение приветствия вида "Привет, [имя]!" в консоль.
// function greet(name) {
//     console.log(`Hello ${name}!`);
// }
// great("Arthur")

// Функция сложения чисел:
// Напишите функцию sum(a, b), которая принимает два числа и возвращает их сумму.
// function sum(a,b) {
//     const result = a + b
//     console.log(result);
// }
// sum(5,10);

// Функция определения четности числа:
// Напишите функцию isEven(num), которая принимает число и возвращает true, если число четное, и false, если нечетное.
// function isEven(num) {
//     if (num % 2 == 0) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// isEven(4)

// Функция поиска максимального числа в массиве:
// Напишите функцию findMax(numbers), которая принимает массив чисел и возвращает максимальное число из этого массива.
// const arr = [-3,-2,-1,0,1,2,3,102,5,55,77,101]
// function findMax(numbers) {
//     console.log(Math.max(...numbers));
// }
// findMax(arr)

// Функция реверса строки:
// Напишите функцию reverseString(str), которая принимает строку и возвращает обратную ей строку.
// В последней задаче изучить метод reverse, join, split
// split - разбитие строки на массив отдельных символов ("")
// reverse - меняет порядок элементов на обратный
// join - объединяет элементы массива обратно в строку ("")
// function reverseString(str) {
//     let reversDone = str.split("").reverse().join("")
//     console.log(reversDone);
// }
// reverseString("enod esreveR")

// Суммирование элементов массива:
// Используйте метод forEach() для вычисления суммы всех элементов массива.
// const arr = [1,2,3,10]
// let result = 0
// arr.forEach(n => {
//     result += n
//     return result;
// }
// );
// console.log("Sum of numbers: ", result);

// Вывод элементов массива:
// Используйте метод forEach() для вывода каждого элемента массива в консоль.
// const newArr = [90,80,70,60,50]
// newArr.forEach(n => {
//     console.log(n);
// })
// Удвоение каждого элемента массива:
// Используйте метод forEach() для удвоения каждого элемента массива.
// const arrNumbers = [5,10,15,20]
// arrNumbers.forEach(n => {
//     console.log(n*n);
// })


// 2 ЧАСТЬ
// Map:
// Создайте массив объектов, каждый из которых представляет собой информацию о человеке (имя, возраст и т. д.). 
// Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.
// const persons = [
//     {name: "Tom",age: 37,sex: "M"},
//     {name: "Samantha",age: 23,sex: "W"},
//     {name: "Robin",age: 29,sex: "M"}
// ]
// let names = persons.map((persons) => {
//     return persons.name;
//     }
// )
// console.log(names);


// Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.
// const newArr = ["One","Two","Three",1,2,3]
// const changeString = newArr.map( (element) => {
//     if (typeof element === "string") {
//         let newNumber = Math.floor(Math.random()* 1000)
//         return newNumber;
//     } else {
//         return element;
//     }
// })
// console.log(changeString);

// Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую строку в объект Date.
// const dates = ["05/19/2024","07/30/2004","12/19/1994","01/16/1995"]
// const dateObject = dates.map( (dateString) => {
//     const [month,day,year] = dateString.split("/")
//     return new Date(year, month - 1, day)
// })
// console.log(dateObject);

// Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты каждого числа.
// const arrNumbers = [-3,-2,-1,0,1,2,3,10,417]
// const squareNumbers = arrNumbers.map( (element) => {
//     return element * element
// })
// console.log(squareNumbers);

// Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого слова.
// const words = ["done","get","anything", "expenssive", "trust"]
// const lengthWords = words.map((element) => {
//     return element.length
// })
// console.log(lengthWords);

// ForEach:
// Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, умноженный на 2.
// const arr = [1,3,5,7,9]
// arr.forEach( (element) => {
//     const result = element * 2
//     console.log(result);
// })

// Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем регистре.
// const arrStrings = ["some", "any", "somebody", "anybody"]
// arrStrings.forEach( (element) => {
//     const upCase = element.toUpperCase(element)
//     console.log(upCase);
// })

// Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного свойства каждого объекта.
// const arrObjects = [{name: "Tom", age: 20}, {name: "Robert", age: 22}, {name: "Chestor", age: 33}]
// arrObjects.forEach( (element) => {
//     console.log(`${element.name} said that he ${element.age} years old`);
// })

// Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа.
// const numbers = [33,56,983,1001,14]
// numbers.forEach( (element) => {
//     if(element % 2 === 0) {
//         console.log(`Четные числа: ${element}`);
//     } else {
//         console.log(`Нечетные: ${element}`);
//     }
// })

// Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.
// const words = ["get","job","better","distance","animals"]
// words.forEach( (element) => {
//     if(element.length >= 6) {
//         console.log(element);
//     }
// })

// Filter:
// Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.
// const numbers = [-3,-2,-1,1,2,3]
// const positiveNum = numbers.filter( (element) => {
//     if(element > 0) {
//         return element;
//     }
// })
// console.log(positiveNum);

// Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более одного слова.
// const arrWords = ["give it","run","take a shot","thanks","bye bye bye"]
// const doubleWords = arrWords.filter( (element) => {
//     return element.split(" ").length > 1;
// })
// console.log(doubleWords);

// Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только совершеннолетних.
// const arrObjects = [{name: "Arthur", age: 33},{name: "Nastya", age: 31}, {name: "Alla", age: 18}]
// const adults = arrObjects.filter((element) => {
//     if(element.age > 21) {
//         return element;
//     } else {
//         console.log(`${element.name} Не проходит во позрасту`);
//     }
// })
// console.log(adults);

// Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 3 без остатка.
// const numbers = [23,546,1222,78,3,4,89,9]
// const newNumbers = numbers.filter((element) => {
//     if(element % 3 === 0) {
//         return element;
//     }
// })
// console.log(newNumbers);

// Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с определенной буквы.
// const arr = ["finger","laptop","chat","windows"]
// const letter = arr.filter((element) => {
//     return element.charAt(0) === "w"
// })
// console.log(letter);



// const arr = ["one","two","something",1,13,1333]

// const rewrite = arr.forEach((element) => {
//     const rewrite = element + " new text"
//     console.log(rewrite);
// })

// const newWords = arr.map((element) => {
//     return element + " something new";
// })
// console.log(newWords);

// const filterWords = arr
//     .filter((element) => {
//     return typeof element === "string" && element.length >3;
// })
//     .map((element) => {
//         return element + " Hi from Arthur"
//     })
// console.log(filterWords);

// Если длинна массива меньше 2х елементов то вывести element + Hi from Arthur, если больше 2, то вывести в консоль


