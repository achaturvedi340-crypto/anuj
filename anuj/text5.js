//Lecture 9 Data Type of js Summary

//#primitive DATA TYPE 
//7 TYPE: String, Number, Boolean, Null, Undefined, Symbol, bigint

const score = 100
const scoreValue = 100.3

const isloggedin = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber=234235265426535345n    //bigint



// Reference (Non Primmitive)

//Araay, Object , Function

const hero = ["anuj", "subrat", "rishi"]

let myObj = {
    name: "anuj",
    age: 22,
}

const myFunction= function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);
console.log(typeof myFunction);