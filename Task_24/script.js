// Напишите функцию mergeObjects(obj1, obj2), которая принимает два объекта obj1 и obj2 и 
// возвращает новый объект, содержащий все свойства из obj1 и obj2. 
// Если одно и то же свойство присутствует в обоих объектах, 
// использовать значение из obj2.
// const people = {
//     name: "Simon",
//     age: 24,
//     city: "LA"
// }
// const pets = {
//     name2: "Matt",
//     age2: 8,
//     city2: "NYC"
// }

// function muliplyObjects(obj1, obj2) {

//     let result = {}

//     for(let key in obj1) {
//         console.log(key)
//         result[key] = obj1[key]
//     }

//     for(let key in obj2) {
//         console.log(key)
//         result[key] = obj2[key]
//     }

//     console.log(result)
// }

// muliplyObjects(people, pets)
// muliplyObjects(people, pets)

// const randomObj = {
//     name: 'Yury',
//     age: 26,
//     lastName: 'Arakelov',
//     isProgrammer: true
// }

// randomObj['newKey'] = 'new key'

// console.log(randomObj)


// Объединение объектов
// Создайте функцию mergeObjects, которая принимает два объекта и возвращает новый объект, 
// содержащий все свойства из обоих объектов. Если одно и то же свойство присутствует в обоих объектах, 
// использовать значение из второго объекта.
const firstObj = {
    word: "one",
    number: 1
}
const secondObj = {
    word: "two",
    number: 2
}
function mergeObjects(obj1,obj2) {

    // меняю свойства и не добавляет свойства обоих объектов
    // let result = {};

    // const commonKeys = Object.keys(obj1).filter(key => obj2.hasOwnProperty(key))

    // if (!commonKeys.length) {
    //     return obj1;
    // }
    // commonKeys.forEach(key => {
    //     result[key] = obj2[key]
    // })
    // return result;


    //if не проверяет
    // let result = {}

    // for(let key in obj1) {
    //     result[key] = obj1[key]
    // }

    // for(let key in obj2) {
    //     if(result[key].hasOwnProperty(number)) {
    //         result[key] = obj2[key]
    //     }
    // }
    // return result;

    // замена второго в первый работает, посколько одинаковые свойства объекта, но без проверки
    // const merge = Object.assign(obj1,obj2)
    // return merge;
}
const mergedObject = mergeObjects(firstObj, secondObj);
console.log("Объединение объектов: ",mergedObject);



// Копирование объекта
// Создайте функцию cloneObject, которая принимает объект и возвращает его точную копию.
function cloneObject(obj) {
    const copyObj = Object.assign({},obj)
    return copyObj;
}
console.log("Скопированный объект: ",cloneObject(firstObj));


// Подсчет свойств объекта
// Создайте функцию countProperties, которая принимает объект и возвращает количество его свойств.
function countProperties(obj) {
    let countObj = 0;
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            countObj++;
        };
    }
    return countObj;
}
console.log("Количество свойств у объекта: ",countProperties(firstObj));

// Фильтрация объектов по значению свойства
// Создайте функцию filterByProperty, которая принимает массив объектов, 
// название свойства и значение, и возвращает новый массив объектов, 
// у которых свойство равно заданному значению.
const arrObjects = [
    {
        name: "Sam",
        age: 35,
        city: "Chicago"
    },
    {
        name: "Peter",
        age: 28,
        city: "Maryland"
    },
    {
        name: "Denice",
        age: 18,
        city: "New York"
    }
]
function filterByProperty(arr) {
    return arr.map(obj => ({...obj, city: "Seattle"}))
}
console.log("Новое значение задано у свойства city: ", filterByProperty(arrObjects));


// Преобразование массива объектов
// Создайте функцию transformObjects, которая принимает массив объектов и возвращает новый массив, 
// содержащий только определенные свойства каждого объекта.

function transformObjects(arr,props) {
    return arr.map(object => { // object - это каждый объект массива
        const newObj = {}; // пустой объект, куда будут закинуты нужные свойства
        props.forEach(prop => { // props - массив свойств, где указываются нужные свойства, prop - свойство массива
            newObj[prop] = object[prop] // в пустой массив вкладывается свойство со значением
        })
        return newObj;
    })
}
console.log("Преобразование массива объектов: ", transformObjects(arrObjects,['name','age']));


// Обновление свойств объекта
// Создайте функцию updateProperties, которая принимает объект и объект обновлений, 
// и возвращает новый объект с обновленными значениями свойств.
const oldObj = {
    id: 14,
    userId: 347,
    title: "simple"
}
const newObj = {
    id: 37,
    userId: 12,
    title: "done"
}
function updateProperties(obj, ojbUpd) {
    const updateObject = Object.assign({},obj)

    for(let key in ojbUpd) {
        if(ojbUpd.hasOwnProperty(key)) {
            updateObject[key] = ojbUpd[key]
        }
    }
    return updateObject
}
console.log("Старый объект: ",oldObj);
console.log("Новый объект с обновлениями: ",updateProperties(oldObj,newObj));


//  Удаление свойств из объекта
// Создайте функцию removeProperties, которая принимает объект и массив свойств, 
// и возвращает новый объект без этих свойств.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
function removeProperties(obj) {
    let result = {}
    for(let key in obj) {
        delete obj.year
        result[key] = obj[key]
    }
    return result;

}
console.log("Удаление свойств объекта: ",removeProperties(car));


//  Обратное преобразование объекта в массив
// Создайте функцию objectToArray, которая принимает объект и возвращает массив пар [ключ, значение].
function objectToArray(obj) {
    return Object.entries(obj)
}
console.log("Преобразование объекта в массив: ", objectToArray(car));

// Поиск объекта по значению свойства
// Создайте функцию findByProperty, которая принимает массив объектов, название свойства и значение, 
// и возвращает первый объект, у которого свойство равно заданному значению.
const newCars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2020
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2021
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2019
    }
];
function findByProperty(arr,props,value) {
    let carsArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][props] === value) {
             carsArr.push(arr[i])
        }
    }
    return carsArr;
}
console.log("Поиск по значению: ", findByProperty(newCars,'year',2019));