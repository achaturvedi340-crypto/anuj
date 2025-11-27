// Lecture 15//******************ARRAY PART 2 *******************/

const marvalHero =["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

// marvalHero.push(dc)

// console.log(marvalHero);
// console.log(marvalHero[3][1]);

// const allHero =marvalHero.concat(dc)
// console.log(allHero);

// ... this mathod is called as spread operator

const allnewHero = [...marvalHero, ...dc]

// console.log(allnewHero);

const anotherArr =[1, 2, 3, [4, 5, 6],7 ,[8, 9,[ 6, 4] ]]


// it spread many string into one string
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);

console.log(Array.isArray("Anuj"));
console.log(Array.from("anuj"));
console.log(Array.from({name: "anuj"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



