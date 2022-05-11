// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
const main_header = document.getElementById('main_header');
main_header.className = 'march-2022';

// b) робить шириниу елементу ul 400px
const ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2[0].textContent);

// e) отримує всі елементи li та змінює ім колір фону на сірий
const li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.className = 'anchor';
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of a) {
    if (aElement.textContent === 'link3') aElement.style.fontSize = '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
    aElement.className = `element_${aElement.textContent}`;
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const sub_header = document.getElementsByClassName('sub-header');
for (const subHeaderElement of sub_header) {
    subHeaderElement.style.background = prompt('choose your background', 'red');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeaderElement of sub_header) {
    if (subHeaderElement.textContent === 'content 2 segment') subHeaderElement.style.color = prompt('choose your color', 'green');
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const content_1 = document.getElementsByClassName('content_1');
for (const content1Element of content_1) {
    content1Element.textContent = prompt('Glory to Ukraine!', 'Glory to Heroes!');
}

// l) отримати елементи p та змінити їм padding на 20px
const p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.textContent = 'march-2022';
}