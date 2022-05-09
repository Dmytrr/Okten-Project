// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users.push(new User(1, 'Homer', 'Simpson', 'homer@gmail.com', 911));
users.push(new User(2, 'Marge', 'Simpson', 'marge@gmail.com', 912));
users.push(new User(8, 'Chandler', 'Bing', 'chandler@gmail.com', 918));
users.push(new User(4, 'Lisa', 'Simpson', 'lisa@gmail.com', 914));
users.push(new User(3, 'Bart', 'Simpson', 'bart@gmail.com', 913));
users.push(new User(5, 'Maggie', 'Simpson', 'maggie@gmail.com', 915));
users.push(new User(6, 'Ross', 'Geller', 'ross@gmail.com', 916));
users.push(new User(10, 'Joey', 'Tribbiani', 'joey@gmail.com', 920));
users.push(new User(7, 'Rachel', 'Green', 'rachel@gmail.com', 917));
users.push(new User(9, 'Monica', 'Geller', 'monica@gmail.com', 919));
console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
clients.push(new Client(1, 'Homer', 'Simpson', 'homer@gmail.com', 911, ['coffee', 'cosmetics']));
clients.push(new Client(2, 'Marge', 'Simpson', 'marge@gmail.com', 912, ['tea']));
clients.push(new Client(8, 'Chandler', 'Bing', 'chandler@gmail.com', 918, ['car', 'computer', 'fruit']));
clients.push(new Client(4, 'Lisa', 'Simpson', 'lisa@gmail.com', 914, ['cosmetics', 'fruit']));
clients.push(new Client(3, 'Bart', 'Simpson', 'bart@gmail.com', 913, ['coffee', 'computer', 'tea', 'car']));
clients.push(new Client(5, 'Maggie', 'Simpson', 'maggie@gmail.com', 915, ['fruit']));
clients.push(new Client(6, 'Ross', 'Geller', 'ross@gmail.com', 916, ['computer', 'tea']));
clients.push(new Client(10, 'Joey', 'Tribbiani', 'joey@gmail.com', 920, ['car']));
clients.push(new Client(7, 'Rachel', 'Green', 'rachel@gmail.com', 917, ['tea', 'coffee']));
clients.push(new Client(9, 'Monica', 'Geller', 'monica@gmail.com', 919, ['cosmetics']));
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = () => console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maximal speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}L`);
    this.increaseMaxSpeed = newSpeed => this.maxSpeed += newSpeed;
    this.changeYear = newValue => this.year = newValue;
    this.addDriver = driver => this.driver = driver;
}

let myCar = new Car('Mustang', 'Ford', 1980, 220, 6);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(30);
console.log(myCar.maxSpeed);
myCar.changeYear(2020);
console.log(myCar.year);
myCar.addDriver(users[0]);
console.log(myCar);

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maximal speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}L`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myCar2 = new Car2('Mustang', 'Ford', 1980, 220, 6);
myCar2.drive();
myCar2.info();
myCar2.increaseMaxSpeed(30);
console.log(myCar2.maxSpeed);
myCar2.changeYear(2020);
console.log(myCar2.year);
myCar2.addDriver(users[0]);
console.log(myCar2);

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [];
cinderellas.push(new Cinderella('Cinderella1', 21, 31));
cinderellas.push(new Cinderella('Cinderella2', 22, 32));
cinderellas.push(new Cinderella('Cinderella3', 23, 33));
cinderellas.push(new Cinderella('Cinderella4', 24, 34));
cinderellas.push(new Cinderella('Cinderella5', 25, 35));
cinderellas.push(new Cinderella('Cinderella6', 26, 36));
cinderellas.push(new Cinderella('Cinderella7', 27, 37));
cinderellas.push(new Cinderella('Cinderella8', 28, 38));
cinderellas.push(new Cinderella('Cinderella9', 29, 39));
cinderellas.push(new Cinderella('Cinderella10', 30, 40));

class Prince {
    constructor(name, age, bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
}

let prince = new Prince('Homer', 59, 37)
let findCinderella = (prince, cinderellas) => {
    for (const cinderella of cinderellas) {
        if (prince.bootSize === cinderella.footSize) return cinderella;
    }
}
console.log(findCinderella(prince, cinderellas));
console.log(cinderellas.find(value => value.footSize === prince.bootSize));