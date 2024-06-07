const array = ["One","Two","Three","four","five", 1,22,333,-3,-2,-1,0]

function fltr() {
    for(i = 0; i < array.length; i++) {
        if(typeof array[i] === "string" && array[i].length > 4) {
            console.log(array[i]);
        }
    }
}
fltr(array)

// Напиши функцию, которая принимает параметром массив из строк и чисел 
// мы фильтруем строки от чисел и возвращаем только те строки, что больше 4