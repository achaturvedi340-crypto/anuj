// lectue 6 = Datatype conversion confuision

let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN //not a number
// true =>1; false =>0 

let isloggedin=1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

//1 => true; 0 => false
//"" => false
//"anuj" => true


let someNumber=22

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);