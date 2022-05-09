// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
//          }
// }
class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, coName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.geo = {};
        this.geo.lat = lat;
        this.geo.lng = lng;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.name = coName;
        this.company.catchPhrase = catchPhrase;
        this.company.bs = bs;
    }
}

const user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user);

//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
//     ]
//
// }
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        this.attrs.push(...attrs);
    }
}

const attrsOfA = [{titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
    {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}];
const tagA = new Tag('<a>', 'предназначен для создания ссылок', attrsOfA);
console.log(tagA);

const attrsOfDiv = [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}];
const tagDiv = new Tag('<div>', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', attrsOfDiv);
console.log(tagDiv);

const attrsOfH1 = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'},
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}];
const tagH1 = new Tag('<h1>', 'представляет собой наиболее важный заголовок первого уровня', attrsOfH1);
console.log(tagH1);

const attrsOfSpan = [{titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста.'}];
const tagSpan = new Tag('<span>', 'предназначен для определения строчных элементов документа', attrsOfSpan);
console.log(tagSpan);