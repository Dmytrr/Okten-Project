// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (num1, num2, num3) => {
    if (num1 < num2) {
        return num1 < num3 ? num1 : num3
    } else {
        return num2 < num3 ? num2 : num3
    }
}
console.log(min(4, 2, 7))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (num1, num2, num3) => {
    if (num1 > num2) {
        return num1 > num3 ? num1 : num3
    } else {
        return num2 > num3 ? num2 : num3
    }
}
console.log(max(4, 2, 7))

// - створити функцію яка повертає найбільше число з масиву
let maximum = (array) => {
    let temp = array[0];
    for (const arrayElement of array) {
        if (arrayElement > temp) {
            temp = arrayElement;
        }
    }
    return temp;
}
console.log(maximum([2, 5, 3, 7, 45, 1, 78, 6]))

// - створити функцію яка повертає найменьше число з масиву
let minimum = (array) => {
    let temp = array[0];
    for (const arrayElement of array) {
        if (arrayElement < temp) {
            temp = arrayElement;
        }
    }
    return temp;
}
console.log(minimum([2, 5, 3, 7, 45, 1, 78, 6]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (array) => {
    let temp = 0;
    for (const arrayElement of array) {
        temp += arrayElement;
    }
    return temp;
}
console.log(sum([2, 5, 3, 7, 45, 1, 78, 6]))

//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let inOrder = (number) => {
    for (let i = 1; i <= number; i++) console.log(i);
}
inOrder(9)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let weird = (num1, num2) => {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            console.log(i);
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            console.log(i);
        }
    }
}
weird(21, 27);
weird(136, 133);

//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (array, number) => {
    let temp = array[number];
    array[number] = array[number + 1];
    array[number + 1] = temp;
    return array;
}
console.log(foo([9, 8, 0, 4], 0));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

