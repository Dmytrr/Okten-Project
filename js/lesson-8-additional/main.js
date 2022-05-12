// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let allClasses = [];
let getClasses = (document) => {
    let collection = document.children;
    for (const collectionElement of collection) {
        let elementClasses = collectionElement.classList;
        for (const elementClass of elementClasses) {
            // if (!allClasses.find(item => item === elementClass)) remove dublicates, видалити дублікати
                allClasses.push(elementClass);
        }
        getClasses(collectionElement);
    }
}
getClasses(document);
console.log(allClasses);