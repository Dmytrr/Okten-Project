let a = 1;
if (a !== 0) {
    console.log('Right')
} else {
    console.log('Wrong')
}

let a2 = -1;
console.log(a2 !== 0 ? 'Right' : 'Wrong');

let a3 = 0;
console.log(a3 !== 0 ? 'Right' : 'Wrong');

let time = prompt('Enter the number of minutes');
if (time >= 0 && time < 16) {
    console.log('First quarter')
} else if (time > 15 && time < 31) {
    console.log('Second quarter')
} else if (time > 30 && time < 46) {
    console.log('Third quarter')
} else if (time > 45 && time < 60) {
    console.log('Fourth quarter')
} else {
    console.log('Wrong number')
}

let day = prompt('Enter the number of days');
if (day > 0 && day < 11) {
    console.log('First decade')
} else if (day > 10 && day < 21) {
    console.log('Second decade')
} else if (day > 20 && day < 32) {
    console.log('Third decade')
} else {
    console.log('Wrong number')
}

let dayOfWeek = prompt('Enter the number of days');
switch (dayOfWeek) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Wrong number')
}

let number1 = prompt('Enter first number');
let number2 = prompt('Enter second number');
console.log(number1 >= number2 ? number1 : number2)