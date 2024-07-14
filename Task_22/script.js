// 1. Что такое замыкание (closure) в JavaScript и как оно работает?
// Замыкание - это комбинация функций, когда даётся доступ к внешней функции из внутренней

// function firstFunction() {
//     var name = "Arthur"

//     function secondFunction() {
//         console.log(name);
//         alert(name)
//     }

//     secondFunction()
// }
// firstFunction()

// function firstWord() {
//     const first = "one"

//     function secondWord() {
//         const second = "two"

//         function thirdWord() {
//             const third = "three"
//             console.log(first,second,third);
//         }
//         thirdWord()
//     }
//     secondWord()
// }
// firstWord()

// 2.  Const - это элемент, которому присваиваются данные и они неизменяемые.
//     const number = 12
//     const word = "some text"

//      Var - переменная, которая хранит временные/изменяемые данные. Доступна только в рамках "своей" функции. 
        // function getName() {
        //     var name = "Matt"
        //     console.log(name);
        // }
        // getName()
        // console.log(name); // error
        
//      Let - переменная, которая хранит временные/изменяемые данные. Соблюдает блочную систему, заключенную в {}
        // if (true) {
        //     let blockScoped = "Я виден только здесь";
        //     console.log(blockScoped); // "Я виден только здесь"
        // }
        // console.log(blockScoped); // error

// 3. Асинхронное программирование - это асихронное действие/запрос, которые можно выполнять параллельно с функциями 
// не нарушая работу всего кода.

// async function someAsync() {
//     const link = ''
//     try {
//         const response = await fetch()
//         const getResult = await response.json()
//     } catch (error) {
//         console.log(error);
//     }
// }

// 4. Что такое контекст выполнения (execution context) в JavaScript?
    // Контекст выполнения (execution context) - это окружение, в котором происходит выполнение кода JS. 
    // Глобальный - базовый код в какой нить функции.
    // Контекстный - вызывается функция и создаёт новый контекст.
    // Функция eval. Код выполняется внутри функции и имеет собственный контекст, однако используется крайне редко

    // let a = 'Hello world'
    // function first() {
    //     console.log('Inside first function');
    //     second()
    //     console.log("Again inside first function");
    // }

    // function second() {
    //     console.log("Inside second function");
    // }
    // first()
    // console.log("Inside Global Execution Context");

// 5. 
// map() - создаёт новый массив, такой же длинные, по которому проходится и применяет изменения вносимые в условии
// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newArr = testArr.map(function(element) {
//     return element + 1
// })
// console.log(newArr);

// filter() - проходится по каждому элементу массива проверяет его на соответствующее условие, отфильтровывает непрошедшие элементы, создаёть новый массив
// const filterArr = testArr.filter(function(element) {
//     return element > 5
// })
// console.log(filterArr);

// reduce() - метод, который прогоняет каждый элемент массива сопоставляя друг с другом каждый из последующих элементов. Можно задавать индексы откудо начинать работу метода
// const reduceArr = testArr.reduce(function(a,b) {
//     return a + b
// })
// console.log(reduceArr);

// 6. Что такое прототипное наследование в JavaScript? Как оно отличается от классического наследования?
        // Наследование класса - это способ расширения одного класса другим классом
        // class Animal {
        //     constructor(name) {
        //       this.speed = 0;
        //       this.name = name;
        //     }
        //     run(speed) {
        //       this.speed = speed;
        //       alert(`${this.name} бежит со скоростью ${this.speed}.`);
        //     }
        //     stop() {
        //       this.speed = 0;
        //       alert(`${this.name} стоит неподвижно.`);
        //     }
        //   }
          
        //   let animal = new Animal("Мой питомец");
        //   animal.run(9)

        // class Rabbit extends Animal {
        //     hide() {
        //         alert(`${this.name} прячется!`)
        //     }
        // }
        // let rabbit = new Rabbit("Grey rabbit")

        // rabbit.run(10)
        // rabbit.hide()
        // rabbit.stop()

        // Прототипное наследование - позволяет наследовать объектам свойства из других объектов(копировать, а не создавать заново)
        // let animal = {
        //     eats: true
        // }
        // let rabbit = {
        //     jumps: true
        // }
        // rabbit.__proto__ = animal

        // console.log(rabbit.eats);
        // console.log(rabbit.jumps);


// 7. this - это ссылка на какой то объект.
        // function Dog() {
        //     this.name = "Cheetos"
        // }
        // const firstDog = new Dog()
        // firstDog.name === "Cheetos"

        // console.log(firstDog.name);

        // function Car(brand, model, year) {
        //     this.brand = brand;
        //     this.model = model;
        //     this.year = year
        // }

        // const car1 = new Car("Toyota","Camry", 2022)
        // const car2 = new Car("Lexus", "ES350", 2021)
        // const car3 = new Car("BMW", "E60", 2006)
        // console.log(car1);
        // console.log(car2);
        // console.log(car3);

// 8. Стрелочные функции - имеют более простое(короткое) синтаксическое выражение и у них отсутствует элемент this.
//     Обычным же функциям присваивают название для вызова и исползьют для более развернутого кода
    // let sum = (a,b) => a + b;
    // console.log(sum(1,2));

// 9. Промисфикация - это процесс провращения обычной асинхронной функции в функцию, которая возвращает промис


// 10. async/await - это асинхронная функция, которая проверяет запрос на ошибки

// async function getPosts() {
//     const link = `https://jsonplaceholder.typicode.com/posts`
//     try {
//         const response = await fetch(link)
//         const posts = await response.json()
//         console.log(posts);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getPosts()