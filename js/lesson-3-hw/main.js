for (let i = 0; i < 10; i++) {

    document.write('<div>Lorem ipsum dolor.</div>')

}

for (let i = 0; i < 10; i++) {

    document.write(`<div>Lorem ipsum dolor.${i}</div>`)

}

{
    let i = 0
    while (i < 20) {
        document.write('<h1>Lorem ipsum dolor.</h1>');
        i += 1;
    }
}

{
    let i = 0
    while (i < 20) {
        document.write(`<h1>Lorem ipsum dolor.${i}</h1>`);
        i += 1;
    }
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (const listOfItem of listOfItems) {
    document.write(`<div>${listOfItem}</div>`)
}
document.write('</ul>');


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write('<div>');
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
    document.write(`<img src="${product.image}" alt="" class="product-image">`);
    document.write('</div>')
}