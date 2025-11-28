//Lecture 17 //*********************OBJECT Part:2 ******************/
// const tinderUser = new Object() //this line will give empaty {}
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "anuj"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
        fullName : {
            userfullName :{
               firstName: "anuj",
               lastName: "chaturvedi"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullName);
// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

//spread operetor
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
    id: 1,
    email: "anuj@123",
    },
    {
    id: 1,
    email: "anuj@123",
    },
    {
    id: 1,
    email: "anuj@123",
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
