// Lecture 19 /************************Function and Parameter */

function sayName(){
console.log("A");
console.log("N");
console.log("U");
console.log("j");
}

// sayName // it will give nothing

// sayName()  // it will give output

// function addTwoNumbers( number1, number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers() //it will give NaN(Not an Number)
// addTwoNumbers(3, 4) // it will give 7 output
// addTwoNumbers(3, "4")//it will give 34 output
// addTwoNumbers(3, "a")//it will give 3a output

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // console.log("an");
    // return result
    return number1+number2
    
}
const result = addTwoNumbers(3,5)
// console.log("result:",result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())