// LECTURE 12 //*** Numaber and Math */

// ------------------------------NUMBER------------------------------

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.896

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++ MATH ++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.8));
console.log(Math.floor(4.8));
console.log(Math.min(4, 3, 8, 9));
console.log(Math.max(4, 8, 13, 24));
console.log(Math.random());
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10 +1));

const min =10
const max =20

console.log(Math.floor(Math.random()* (max - min +1))+min)