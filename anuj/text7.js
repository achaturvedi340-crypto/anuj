// LECTURE 11 //*****    String    */

const name = "anuj"
const repoCount = 50

// console.log(name  +  repoCount  +  "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Anurag-hc') // new type declretion of array

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0, 4)
 // there are last string value is not to be count
console.log(newString);


const anotherString = gameName.slice(-7, 4)
// IT should be count in backward direction
console.log(anotherString);


const newStringOne = "  anuj   "
console.log(newStringOne);// It should count space of both side 

console.log(newStringOne.trim());// but it can not

const url = "https://anuj.com/anuj%20chaturvedi"
// It replace value
console.log(url.replace('%20' , '_')); 
console.log(url.includes('anuj'));
console.log(url.includes('hi'));


console.log(gameName.split('_'));

