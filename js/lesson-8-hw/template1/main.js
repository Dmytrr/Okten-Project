// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content'));

// -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules'));

// -- замініть текст параграфа з id 'content' на будь-який інший
console.log(document.getElementById('content').innerText = 'Glory to Ukraine');

// -- замініть текст параграфа з id 'rules' на будь-який інший
console.log(document.getElementById('rules').innerText = 'Glory to Heroes');

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
const allDiv = document.getElementsByTagName('div');
for (const allDivElement of allDiv) {
    allDivElement.style.background = 'red';
    allDivElement.style.color = 'blue';
}
const allP = document.getElementsByTagName('p');
for (const allPElement of allP) {
    allPElement.style.background = 'red';
    allPElement.style.color = 'blue';
}
const allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    allLiElement.style.background = 'red';
    allLiElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const allFc_rules = document.getElementsByClassName('fc_rules');
for (const allFcRule of allFc_rules) {
    allFcRule.style.color = 'red';
}