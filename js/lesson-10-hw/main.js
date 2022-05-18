// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
const myText = document.createElement('div');
myText.setAttribute('id', 'text');
myText.innerText = 'text';
document.body.appendChild(myText);

const myButton = document.createElement('button');
myButton.innerText = 'click me';
document.body.appendChild(myButton);

myButton.onclick = function () {
    myText.style.visibility = 'hidden';
}

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
const myInput = document.createElement('input');
document.body.appendChild(myInput);

const myButton2 = myButton.cloneNode(true);
document.body.appendChild(myButton2);

myButton2.onclick = function () {
    const age = myInput.value;
    if (!age) {
        myButton2.innerText = 'click me';
        return;
    }
    if (age < 18) {
        myButton2.innerText = 'you are too YOUNG';
    }
    if (age >= 18) {
        myButton2.innerText = 'you are too OLD';
    }
}

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
const myForm1 = document.createElement('form');
const myForm2 = document.createElement('form');
const myButton3 = myButton.cloneNode(true);
document.body.append(myForm1, myForm2, myButton3);

const myInput1a = document.createElement('input');
const myInput1b = document.createElement('input');
const myInput2a = document.createElement('input');
const myInput2b = document.createElement('input');
myForm1.append(myInput1a, myInput1b);
myForm2.append(myInput2a, myInput2b);

myButton3.onclick = function () {
    const a1 = myInput1a.value;
    const b1 = myInput1b.value;
    const a2 = myInput2a.value;
    const b2 = myInput2b.value;
    console.log(a1 + ' ' + b1 + ' ' + a2 + ' ' + b2);
}

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const inputFirst = document.createElement('input');
const inputSecond = document.createElement('input');
const inputThird = document.createElement('input');
const myButton4 = myButton.cloneNode(true);
document.body.append(inputFirst, inputSecond, inputThird, myButton4);

myButton4.onclick = function () {
    const myTable = document.createElement('table');
    document.body.appendChild(myTable);
    for (let i = 0; i < inputFirst.value; i++) {
        const myTr = document.createElement('tr');
        myTable.appendChild(myTr);
        for (let j = 0; j < inputSecond.value; j++) {
            const myTd = document.createElement('td');
            myTd.innerText = inputThird.value;
            myTr.appendChild(myTd);
        }
    }
}