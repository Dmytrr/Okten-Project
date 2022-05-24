// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const myForm = document.createElement('form');
myForm.setAttribute('name', 'nameAndAge');
const inputName = document.createElement('input');
inputName.setAttribute('name', 'name');
const inputAge = document.createElement('input');
inputAge.setAttribute('name', 'age');
const button = document.createElement('button');
button.innerText = 'submit';
document.body.appendChild(myForm);
myForm.append(inputName, inputAge, button);

myForm.onsubmit = () => {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('age', inputAge.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const myForm2 = document.createElement('form');
myForm2.setAttribute('name', 'carData');
const inputModel = document.createElement('input');
inputModel.setAttribute('name', 'model');
const inputType = document.createElement('input');
inputType.setAttribute('name', 'type');
const inputVolume = document.createElement('input');
inputVolume.setAttribute('name', 'type');
const button2 = document.createElement('button');
button2.innerText = 'submit';
document.body.appendChild(myForm2);
myForm2.append(inputModel, inputType, inputVolume, button2);

myForm2.onsubmit = () => {
    const car = {};
    car.model = inputModel.value;
    car.type = inputType.value;
    car.volume = inputVolume.value;
    localStorage.setItem('car', JSON.stringify(car));
}