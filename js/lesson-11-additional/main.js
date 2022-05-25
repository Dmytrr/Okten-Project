// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
for (const user of users) {
    const div = document.createElement('div');
    div.innerText = JSON.stringify(user);
    document.body.appendChild(div);
    const button = document.createElement('button');
    button.innerText = 'add to favorites';
    button.style.marginBottom = '20px';
    document.body.appendChild(button);

    button.onclick = () => {
        setToLocal(user);
        button.innerText = 'added';
    }
}
const div = document.createElement('div');
document.body.appendChild(div);
const ref = document.createElement('a');
ref.innerText = 'favorites.html';
ref.setAttribute('href', 'http://localhost:63342/Okten-Project/js/lesson-11-additional/favorites.html');
div.appendChild(ref);

function setToLocal(user) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : [];
    favorites.push(user);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// const favoritesPage = open('favorites.html');