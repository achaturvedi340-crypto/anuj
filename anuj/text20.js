//Lecture 24 //*****************Immediately Invoked Expressions ***********/

(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
    
})();
//for remove globel scope pollution we will use ()this

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("anuj")