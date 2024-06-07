// Задача 1
// Дан массив mixArr, содержащий числа и строки. Напишите функцию processMixArr, которая принимает массив и 
// булево значение isUpperCase. 
// Если isUpperCase равно true, функция должна вернуть массив строк, преобразованных в верхний регистр. 
// Если isUpperCase равно false, функция должна вернуть массив строк, преобразованных в нижний регистр.

// const mixArr = [4,5,6,"god","thanks","any"]

// function processMixArr(someArr,isUpperCase) {
//     if(isUpperCase) {
//         return someArr
//             .filter((element) => typeof element === "string")
//             .map((element) => element.toUpperCase())
//     } else {
//         return someArr
//             .filter((element) => typeof element === "string")
//             .map((element) => element.toLowerCase())
//     }
// }

// console.log(processMixArr(mixArr,true));

// Задача 2
// Дан массив numStrArr, содержащий числа и строки. Напишите функцию filterAndDoubleNumbers, которая принимает массив 
// и булево значение isPositive. 
// Если isPositive равно true, функция должна вернуть массив только положительных чисел, умноженных на 2. 
// Если isPositive равно false, функция должна вернуть массив только отрицательных чисел, умноженных на 2.

// const numStrArr = [90,16,30,"time","crash","Robin",-4]
// function filterAndDoubleNumbers(someArr,isPositive) {
//     if(isPositive) {
//         return someArr
//             .filter((element) => typeof element === "number" && element > 0)
//             .map((element) => element * 2)
//     } else {
//         return someArr
//             .filter((element) => typeof element === "number" && element < 0)
//             .map((element) => element * 2)
//     }
// }
// console.log(filterAndDoubleNumbers(numStrArr,false));

// Задача 3
// Дан массив lengthArr, содержащий строки. Напишите функцию filterByLength, которая принимает массив и число minLength. 
// Функция должна вернуть массив строк, длина которых больше или равна minLength.

// const lengthArr = ["top","silverado","jambon","route","copy"]
// function filterByLength(someArr,minLength) {
//     return someArr
//         .filter((element) => element.length >= minLength)
// }
// console.log(filterByLength(lengthArr,5));

// Задача 4
// Дан массив concatArr, содержащий строки. Напишите функцию concatStrings, которая принимает массив и строку separator. 
// // Функция должна вернуть одну строку, состоящую из всех элементов массива, объединенных через separator.

// const concatArr = ["hope","generous","cat","Rome","Grogu"]
// function concatStrings(someArr,separator) {
//     return someArr
//         .concat(separator)
//         .join('')
// }
// console.log(concatStrings(concatArr,"+part of array"));

// Задача 5
// Дан массив reverseNumArr, содержащий числа. Напишите функцию reverseNumbers, которая принимает массив и булево значение reverse. 
// Если reverse равно true, функция должна вернуть массив чисел в обратном порядке. 
// Если reverse равно false, функция должна вернуть массив чисел в исходном порядке.

// const reverseNumArr = [35,80,123,490,1151]
// function reverseNumbers(someArr,reverse) {
//     if(reverse) {
//         return someArr
//             .reverse()
//     } else {
//         return someArr;
//     }

// }
// console.log(reverseNumbers(reverseNumArr,true));

// Задача 6
// Дан массив strArr, содержащий строки. Напишите функцию filterAndSort, которая принимает массив и булево значение sortAscending. 
// Если sortAscending равно true, функция должна вернуть массив строк, отсортированных в алфавитном порядке. 
// Если sortAscending равно false, функция должна вернуть массив строк, отсортированных в обратном алфавитном порядке.

// const strArr = ["time","bills","Rondo","sometimes",'Toronto']
// function filterAndSort(someArr,sortAscending) {
//     if(sortAscending) {
//         return someArr.sort()
//     } else {
//         return someArr.sort().reverse()
//     }
// }
// console.log(filterAndSort(strArr,false));

// Задача 7
// Дан массив objArr, содержащий объекты с полем age. Напишите функцию filterByAge, которая принимает массив и число minAge. 
// Функция должна вернуть массив объектов, у которых поле age больше или равно minAge.

// const objArr = [{name:"Tom", age: 18},{name:"Sam", age: 25},{name:"Tonya", age: 23}]
// function filterByAge(someArr,minAge) {
//     return someArr
//         .filter((element) => element.age >= minAge)
// }
// console.log(filterByAge(objArr,20));

// Задача 8
// Дан массив nestedArr, содержащий массивы строк. Напишите функцию flattenAndUppercase, которая принимает массив 
// и булево значение flatten. 
// Если flatten равно true, функция должна вернуть массив всех строк в одном уровне вложенности, преобразованных в верхний регистр. 
// Если flatten равно false, функция должна вернуть исходный массив.

// const nestedArr = [["Tom","Sam","Robin"],["Andy","Samantha","Loren"]]
// function flattenAndUppercase(someArr,flatten) {
//     if(flatten) {
//         return someArr
//             .flat()
//     } else {
//         return someArr;
//     }
// }
// console.log(flattenAndUppercase(nestedArr,true));

// Задача 9
// Дан массив mixObjArr, содержащий объекты с полями type и value. Напишите функцию filterAndTransform, которая принимает массив 
// и строку typeToFilter. 
// Функция должна вернуть массив значений, где поле type равно typeToFilter, и значение преобразовано в строку(value to string).

// const mixObjArr = [{type: "Max", value: 119},{type: "Min", value: 32}]
// function filterAndTransform(someArr,typeToFilter) {
//     return someArr
//         .filter((element) => element.type === typeToFilter)
//         .map((element) => element.value.toString())
// }
// console.log(filterAndTransform(mixObjArr,"Max"));

// Задача 10
// Дан массив objArr, содержащий объекты с полями name и score. Напишите функцию filterAndSumScores, которая принимает массив 
// и строку namePrefix. 
// Функция должна вернуть сумму всех значений score для объектов, у которых поле name начинается с namePrefix.

// const objArr = [{name: "13Termin", score: 490}, {name: "Sartomn", score: 470},{name: "13Rotinar", score: 640}]
// function filterAndSumScores(someArr,namePrefix) {
//     return someArr
//         .filter((element) => element.name.startsWith(namePrefix))
//         .reduce((sum, element) => sum += element.score, 0)
// }
// console.log("Sum of scores: ", filterAndSumScores(objArr,"1"));