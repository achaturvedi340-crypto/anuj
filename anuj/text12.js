//*************************      OBJECTS     **************/

//singleton
//object.create


// object literals

const muSym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    // full name should not be changed by the dot(.) operator
    "full name": "Anurag chaturvedi",
    age:18,
    [muSym] : "mykey1",
    location : "jaipur",
    email: "hetesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name)
console.log(typeof JsUser[muSym]);

JsUser.email = "anuj?@123"
// Object.freeze(JsUser)
JsUser.email = "hello@123"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}



// console.log(JsUser.greeting());
JsUser.greetingtwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());