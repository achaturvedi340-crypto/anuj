//Lecture 13 //***********   Date and Time in Depth */

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);   

// Type of DATE should be object

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0,23,5,3)
let myCreatedDate = new Date("2023-01-20")
// console.log(myCreatedDate.toDateString());


let myTimeStemp = Date.now()

// console.log(myTimeStemp);
// console.log(myCreatedDate.grtTime());

//That parameter gives second of the date


// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('Default',{
    weekday: "long"

})