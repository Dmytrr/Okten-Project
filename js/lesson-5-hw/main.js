// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let sum = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum = sum + arrayElement;
    }
    return sum;
}
console.log(sum([5, 3, 7, 9, 2]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let smallAndBig = (...nums) => {
    let small = nums[0];
    let big = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > big) {
            big = nums[i]
        }
        if (nums[i] < small) {
            small = nums[i]
        }
    }
    console.log(big);
    return small
}
console.log(smallAndBig(34, 6, 2, 8, 54, 4))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randArr = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random() * 100)
    }
    return arr;
}
console.log(randArr(7))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randArr2 = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random() * limit)
    }
    return arr;
}
console.log(randArr2(5, 20))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (array) => {
    let revArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i])
    }
    return revArr
}
console.log(reverse([1, 2, 3, 4, 5]))
//
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(2, 3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfCircle = (r) => 3.14 * r * r;
console.log(areaOfCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaOfCylinder = (h, r) => 2 * 3.14 * r * (r + h);
console.log(areaOfCylinder(4, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент
let iterator = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
iterator([3, 56, true, 'hello'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`)
createParagraph('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUL = (li) => document.write(`<ul><li>${li}</li><li>${li}</li><li>${li}</li></ul>`);
createUL('okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUL2 = (li, num) => {
    document.write('<ul>')
    for (let i = 0; i < num; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write('</ul>')
}
createUL2('hello world!', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let iterator2 = (array) => {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write('</ul>');
}
iterator2([false, 34, 2, 'test', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let iterator3 = (arrayOfObjects) => {
    for (const arrayElement of arrayOfObjects) {
        document.write('<ul>');
        document.write(`<li>${arrayElement.id}</li><li>${arrayElement.name}</li><li>${arrayElement.age}</li>`);
        document.write('</ul>');
    }
}
iterator3([{id: 1, name: 'Igor', age: 23}, {id: 2, name: 'Ira', age: 32}, {id: 3, name: 'Roma', age: 26}])

// - створити функцію яка повертає найменьше число з масиву
let smallestNum = (array) => {
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < res) {
            res = array[i]
        }
    }
    return res
}
console.log(smallestNum([5, 3, 8, 2]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum2 = (array) => {
    let res = 0;
    for (const arrayElement of array) {
        res = res + arrayElement
    }
    return res
}
console.log(sum2([1, 2, 3, 4]))

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let reverse2 = (array) => {
    let revArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i])
    }
    return revArr
}
console.log(reverse2([{id: 1, name: 'Igor', age: 23}, {id: 2, name: 'Ira', age: 32}]))