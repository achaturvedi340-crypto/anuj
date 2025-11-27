// Lecture 14 //************************        ARRAY            *********************/

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["shaktiman" ,"Hanuman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr["one"]); 
// console.log(myArr[1]);

//Array Method 

// myArr.push(6)
// myArr.push(7) //it should be Add in last of array

// myArr.pop() // it should be remove last digit of array

// it should be Add at the Starting point of array
// myArr.unshift(9) 

// it should be remove at the Starting point of array
// myArr.shift()

// console.log(myArr.include(9)); //it gives boolean value

// console.log(myArr.indexof(3)); // it gives index value

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//++++slice, splice

console.log("A", myArr);

// it return a copy of a section of array
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


// it should be remove the seclected section of array
const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);
