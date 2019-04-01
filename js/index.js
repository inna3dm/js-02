// for (let i = 100; i > 0; i--) {
//     if (i % 2 === 1) {
//         continue;        
//     }
//     console.log(i);
// }


// let i = 0;
// while (i<=100 ) {
//     console.log(i)
//     i++;
// }


// let i = 0;
// do {
//     i++;    
// } while (i > 100);


// let num = parseInt(prompt('Please enter a number'));
// while (Number.isNaN(num)) {
//     alert('Please enter a number!');
//     num = parseInt(prompt('Please enter a number'));
// }


// let num;
// do {
//     num=parseInt(prompt('Please enter a number'));
// } while (Number.isNaN(num));

let productNames = ['Xiaomi Mi8',
            'Chevrolet Corvette',
            'Sony Playstation'];
productNames.push('Tesla X');
productNames.push('iPhone 8');
productNames.push('Banana');
console.log(productNames[2]);
console.log(productNames.length);


productNames.push('Toyota Corolla');


// for (let i = 0; i < productNames.length; i++) {
//     console.log(i, productNames[i]);
// }

console.log(productNames.length);

productNames.forEach(function (el) {
    console.log(el);
});

productNames.forEach( (el, idx) => console.log(idx, el) );



//MAP
//FILTER
//REDUCE