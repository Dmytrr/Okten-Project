// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const myDiv = document.createElement('div');
myDiv.className = 'wrap collapse alpha beta';
myDiv.style.background = 'cornflowerblue';
myDiv.style.color = 'bisque';
myDiv.style.fontSize = '25px';
myDiv.textContent = 'Hello';
document.body.prepend(myDiv);
const myDivClone = myDiv.cloneNode(true);
document.body.prepend(myDivClone);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const arr = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.querySelector('.menu');
for (const item of arr) {
    const myLi = document.createElement('li');
    myLi.textContent = item;
    menu.appendChild(myLi);
}

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const myDiv = document.createElement('div');
    myDiv.textContent = item.title + ' - ' + item.monthDuration;
    document.body.appendChild(myDiv);
}

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const myDiv = document.createElement('div');
    myDiv.className = 'item';
    document.body.appendChild(myDiv);
    const myH1 = document.createElement('h1');
    myH1.className = 'heading';
    myH1.textContent = item.title;
    const myP = document.createElement('p');
    myP.className = 'description';
    myP.textContent = item.monthDuration;
    myDiv.append(myH1, myP);
}
