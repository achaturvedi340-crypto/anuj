//Lecture 21 /***************Global and local scope******** */

// let a = 10
// const b = 20
// var c = 30

let a=300
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner:",a);    
}

for (let i =0;i<Array.length;i++){
    const element = array[1];
}
console.log(a);
//console.log(b);
//console.log(c);

