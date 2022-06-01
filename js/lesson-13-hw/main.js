function haveBreakfast(coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (coffee >= 3) {
                resolve(true);
            } else {
                reject('I will try tomorrow again.');
            }
        }, 500);
    });
}

function goToWork(awakened) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (awakened) {
                resolve(500);
            } else {
                reject();
            }
        }, 200);
    });
}

function haveLunch(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 100) {
                resolve(true);
            } else {
                reject();
            }
        }, 400);
    });
}

function goHome(inGoodMood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inGoodMood) {
                resolve('I am happy!');
            } else {
                reject();
            }
        }, 100);
    });
}

async function myDay(cupsOfCoffee) {
    try {
        const awakened = await haveBreakfast(cupsOfCoffee);
        console.log('I am awake and ready for work!');
        const money = await goToWork(awakened);
        console.log('I got', money, '$!', 'I am having a lunch at nice restaurant!');
        const inGoodMood = await haveLunch(money);
        console.log('I am in a very good mood! I am going to a party!');
        const result = await goHome(inGoodMood);
        console.log(result);
    } catch (e) {
        console.warn('I am sleepy.', e);
    }

}

myDay(2);
myDay(4);