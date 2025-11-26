//   Lecture 10   *********  //  Stsck and heap memory **********//
  

// Stack memory is used in PRIMITIVE DATA TYPE
//Heap memory is used in NON-PRIMITIVE DATA TYPE


//stack
let myYoutubename = "Anuragchaturvedi"

let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);  // Anuragchaturvedi
console.log(anothername);    // chai aur code



// Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "anuj@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

