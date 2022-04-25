function square(a, b) {
    return a * b;
}

function areaOfCircle(r) {
    return 3.14 * r * r;
}

function areaOfCylinder(h, r) {
    return 2 * 3.14 * r * (r + h);
}

function iterator(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

function createUL(li) {
    document.write(`<ul><li>${li}</li><li>${li}</li><li>${li}</li></ul>`);
}

function createUL2(li, num) {
    for (let i = 0; i < num; i++) {
        document.write(`<ul><li>${li}</li><li>${li}</li><li>${li}</li></ul>`);
    }
}

function iterator2(array) {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write('</ul>');

}

function iterator3(arrayOfObjects) {
    for (const arrayElement of arrayOfObjects) {
        document.write('<ul>');
        document.write(`<li>${arrayElement.id}</li><li>${arrayElement.name}</li><li>${arrayElement.age}</li>`);
        document.write('</ul>');
    }
}

function iterator3a(arrayOfObjects) {
    for (const arrayElement of arrayOfObjects) {
        document.write('<ul>');
        for (const arrayElementKey in arrayElement) document.write(`<li>${arrayElement[arrayElementKey]}</li>`);
        document.write('</ul>');
    }
}

function smallerNum(array) {
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < res) {
            res = array[i]
        }
    }
    return res
}

function sum(array) {
    let res = 0;
    for (const arrayElement of array) {
        res = res + arrayElement
    }
    return res
}
