// Функция сложения двух чисел:
// Напишите функцию add, которая принимает два числа и возвращает их сумму.

// function add(a,b) {
//     return a + b;
// }
// console.log('Sum of numbers: ', add(1,2));

// Функция проверки четности числа:
// Напишите функцию isEven, которая принимает число и возвращает true, если число четное, и false, если нечетное.

// function isEven(num) {
//     if(num % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Uneven");
//     }
// }
// isEven(2)

// Функция нахождения максимального числа:
// Напишите функцию max, которая принимает два числа и возвращает большее из них.

// function max(a,b) {
//     if(a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log('Max numbers is ', max(5,9));

// Функция вычисления факториала:
// Напишите функцию factorial, которая принимает число и возвращает его факториал.

// function factorial(num) {
//     if(num == 0 || num == 1) {
//         return 1;
//     } else {
//         return num * factorial(num-1)
//     }
// }
// console.log("Factorial number is ", factorial(5))


// Функция переворота строки:
// Напишите функцию reverseString, которая принимает строку и возвращает её в перевернутом виде.

// function reverseString(someString) {
//     const splitWord = someString.split("")
//     const reversedWord = splitWord.reverse()
//     const joinedWord = reversedWord.join("")
//     return joinedWord;
// }
// console.log('Reverse string: ', reverseString("eno"));

// Функция проверки палиндрома:
// Напишите функцию isPalindrome, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае.

// function isPalindrome(word) {
//     if(word.split("").reverse().join("") == word) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// isPalindrome("tot")

// Функция вычисления площади круга:
// Напишите функцию circleArea, которая принимает радиус круга и возвращает его площадь.

// function circleArea(r) {
//     return console.log(S = 3.14 * (r*r));
// }
// circleArea(5)

// Функция проверки совершеннолетия:
// Напишите функцию isAdult, которая принимает возраст и возвращает true, если возраст больше или равен 18, и false в противном случае.

// function isAdult(age) {
//     if(age >= 18) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// isAdult(34)

// Функция поиска минимального числа в массиве:
// Напишите функцию findMin, которая принимает массив чисел и возвращает минимальное число в массиве.

// const arr = [35,78,22,101,29,56]
// function findMin(someArr) {
//    const minimum = Math.min(...someArr)
//    return console.log(minimum);
// }
// findMin(arr)

// Функция преобразования температуры:
// Напишите функцию celsiusToFahrenheit, которая принимает температуру в градусах Цельсия и возвращает её в градусах Фаренгейта.

// function celsiusToFahrenheit(temp) {
//     const fahrenheit = temp*9/5+32
//     return console.log("Fahrenheit: ", fahrenheit);
// }
// celsiusToFahrenheit(20)

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.
// Input: nums= [1, 2, 3, 4]
// Output: false
// Explanation: There are no duplicates in the given array.

// const nums = [1,2,3,4]

// function checkСoincidence(nums) {
//     const numSet = new Set(nums) // create a bunch "new Set()" - all duplicates are automatically deleted
//     return nums.length > numSet.size;
// }
// console.log(checkСoincidence(nums));


// Функция, возвращающая функцию:
// Напишите функцию createMultiplier, которая принимает одно число multiplier и возвращает функцию, 
// умножающую любое число на этот multiplier.
// function createMultiplier(multiplier) {
    
//     return function (num){
//         return  num * multiplier;
//     };
// }
// const multiplyBy2 = createMultiplier(4)
// console.log(multiplyBy2(13));
// console.log(createMultiplier(2)(4));

// Проверка возраста:
// Напишите функцию checkAge, которая принимает возраст пользователя и возвращает строку:

// "Младенец", если возраст меньше 1 года;
// "Ребенок", если возраст от 1 до 12 лет;
// "Подросток", если возраст от 13 до 17 лет;
// "Взрослый", если возраст от 18 до 64 лет;
// "Пожилой", если возраст 65 лет и старше.

// function checkAge(age) {
//     if(age < 1) {
//         console.log("child(before 1 year)");
//     } else if(age >= 1 && age <= 12) {
//         console.log("children(between 1 - 12 years)");
//     } else if(age >=13 && age <= 17) {
//         console.log("teenager(between 13 - 17 years)");
//     } else if(age >=18 && age <= 64) {
//         console.log("adult(between 18 - 64 years)");
//     } else {
//         console.log("old(more than 64 years)");
//     }
// }
// checkAge(65)
// =========
// const arr = [2,3]
// const arrNew = [345,789,"one"]
// const arrNew2 = ["one","two",3]
// function filterArr(someArr) {
//     return someArr.filter((element) => typeof element === "number")
    
// }
// console.log(filterArr(arr));
// console.log(filterArr(arrNew));

// function filterStr(someArr) {
//     return someArr.filter((element) => typeof element === "string")
// }
// console.log(filterStr(arrNew));
// console.log(filterStr(arrNew2));
// =============
// const newArr = ["one",2,"three",4,"five"]
// function filterArr(someArr,isWorking) {
//     if(isWorking) {
//         return someArr.filter((element) => typeof element === "string")
//     } else {
//         return someArr
//         .filter((element) => typeof element === "string")
//         .map((element) => element.split('').reverse().join(''))
//     }
// }
// console.log(filterArr(newArr,false));


// Дан массив numArr, содержащий как числа, так и строки. 
// Напишите функцию processNumbers, которая принимает массив numArr и булево значение double. 
// Если double равно true, функция должна вернуть массив только из чисел, умноженных на 2. 
// Если double равно false, 
// функция должна вернуть массив только из чисел, увеличенных на 10.

// const numArr = [7,8,9,"wood","some","Tom"]

// function processNumbers(someArr,double) {
//     if(double) {
//         return someArr
//             .filter((element) => typeof element === "number")
//             .map((element) => element * 2)
//     } else {
//         return someArr
//             .filter((element) => typeof element === "number")
//             .map((element) => element + 10)
//     }
// }
// console.log(processNumbers(numArr,false));

// Дан массив wordsArr, содержащий строки. Напишите функцию processWords, 
// которая принимает массив wordsArr и булево значение capitalize. 
// Если capitalize равно true, функция должна вернуть массив слов, начинающихся с заглавной буквы. 
// Если capitalize равно false, 
// функция должна вернуть массив слов, начинающихся с заглавной буквы, но в обратном порядке.
// charAt(0)
// Данный метод применяется к строке чтобы опердеелить ее первый элемент (первая буква строки)
// const wordsArr = ["Name","Age","city","Height","width"]
// function processWords(someArr,capitalize) {
//     if(capitalize) {
//         return someArr
//             .filter((element) => element.charAt(0) === element.charAt(0).toUpperCase())
//     } else {
//         return someArr
//             .filter((element) => element.charAt(0) === element.charAt(0).toLowerCase())
//             .map((element) => element.split('').reverse().join(''))
//     }
// }
// console.log(processWords(wordsArr,false));







