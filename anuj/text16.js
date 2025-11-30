// Lecture 20 /********Function with Object and Array*********/

// only num1 can print one value
//But ...num1 can print an array
// function calculateCartPrice(...num1)
function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,600));


const user = {
    username: "anuj",
    price: 200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
  username: "anurag",
  price: "500"
})

const myNewArray = [200,100,700]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,56,700]));