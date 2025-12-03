// Lecture 23 // THIS Keyword and Arrow Funtion
const user={
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
       // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "anuj"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "anurag"
//     console.log(this.username);
    
// }
// chai()

// const chai=function (){
//      let username = "anurag"
//      console.log(this.username);
    
// }

const chai= () => {
     let username = "anurag"
     console.log(this);
    
}

//chai()

// const addtwo=(num1,num2) => {
//     return num1+num2
// }

//const addtwo=(num1,num2) =>   num1+num2

// const addtwo=(num1,num2) =>   (num1+num2)

const addtwo=(num1,num2) =>   ({username: "anuj"})
console.log(addtwo(3, 4));

//const myArray =[2,4,5,8,6]

//myArray.forEach()
