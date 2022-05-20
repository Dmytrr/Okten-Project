// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
const unquotable = ['vodka', 'vova', 'benya', 'putin', 'medved'];

const myInput = document.createElement('input');
myInput.setAttribute('type', 'text');
myInput.setAttribute('placeholder', 'enter something bad (vodka)');
const myButton = document.createElement('button');
myButton.setAttribute('class', ' buttonchik');
myButton.innerText = 'click me';
document.body.append(myInput, myButton);

myButton.onclick = function () {
    const word = myInput.value;
    for (const item of unquotable) {
        if (item === word) alert('Hey you, slow down!');
    }
}

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
const myNewInput = myInput.cloneNode(true);
const myButton2 = myButton.cloneNode(true);
document.body.append(myNewInput, myButton2);

myButton2.onclick = function () {
    const word = myNewInput.value;
    const arr = word.split(' ');
    for (const item of unquotable) {
        for (const item2 of arr) {
            if (item === item2) alert('Hey you, slow down!');
        }
    }
}

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
const disappear = myButton.cloneNode(true);
disappear.innerText = 'dis appear me';
document.body.append(disappear);
disappear.onclick = function () {
    disappear.style.visibility = 'hidden';
    // disappear.hidden = true;
}

//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
document.body.onclick = function (ev) {
    console.log(ev.target);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//


// -- взять массив пользователей
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Ternopil', street: 'Shevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Kyiv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Ternopil', street: 'Shevchenko', number: 121}
}];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
const myForm = document.createElement('form');
document.body.append(myForm);
for (let i = 1; i < 4; i++) {
    const myP = document.createElement('p');
    myForm.append(myP);
    const myInput = document.createElement('input');
    myInput.setAttribute('type', 'checkbox');
    myInput.setAttribute('id', `myInput${i}`);
    myInput.setAttribute('onchange', `myFn()`);
    myP.append(myInput);
    const myLabel = document.createElement('label');
    myLabel.setAttribute('id', `myLabel${i}`);
    myP.append(myLabel);
}
myLabel1.innerText = 'only false';
myLabel2.innerText = 'only 28+';
myLabel3.innerText = 'only Kyiv';
const usersDiv = document.createElement('div');
document.body.append(usersDiv);

const showUsers = (users) => {
    usersDiv.innerHTML = '';
    for (const pers of users) {
        const myP = document.createElement('p');
        myP.innerText = JSON.stringify(pers);
        usersDiv.append(myP);
    }
}

showUsers(usersWithAddress);

function myFn() {
    let temp = usersWithAddress;
    if (myInput1.checked) {
        temp = temp.filter(value => value.status === false);
    }
    if (myInput2.checked) {
        temp = temp.filter(value => value.age >= 29);
    }
    if (myInput3.checked) {
        temp = temp.filter(value => value.address.city === 'Kyiv');
    }
    showUsers(temp);
}

//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
function traveler(element) {
    if (!document.body.querySelector('#travelDiv')) {
        const travelDiv = document.createElement('div');
        travelDiv.setAttribute('id', 'travelDiv');
        document.body.appendChild(travelDiv);
        const p = document.createElement('p');
        p.setAttribute('id', 'travelP');
        const button1 = document.createElement('button');
        button1.setAttribute('id', 'previous');
        button1.innerText = 'previous';
        const button2 = document.createElement('button');
        button2.setAttribute('id', 'next');
        button2.innerText = 'next';
        travelDiv.append(p, button1, button2);
    }
    travelP.innerText = element;

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    travelP.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    const next = document.getElementById('next');

    next.onclick = function () {
        element.firstElementChild ? traveler(element.firstElementChild) : element.nextElementSibling ? traveler(element.nextElementSibling) : comeBack(element);
    }

    previous.onclick = function () {
        element.previousElementSibling ? traveler(element.previousElementSibling) : traveler(element.parentElement);
    }

    function comeBack(element) {
        if (element.parentElement.nextElementSibling) {
            traveler(element.parentElement.nextElementSibling);
        } else {
            comeBack(element.parentElement);
        }
    }
}

traveler(document.head);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
