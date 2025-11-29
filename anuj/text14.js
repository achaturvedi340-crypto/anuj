//Lecture 18 //*************Object de-structure and JSON API into */

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "anuj"
}

course.courseInstructor
const {courseInstructor: hi} = course

// console.log(courseInstructor);
console.log(hi);


// const navbar =  ({company}) => {
// }
// navbar(company = "anurag")

//--------------------API-------------


// {
//     "name": "Subrat",
//     "coursename": "js in hindi",
//     "price": "free"

// }

// {
//     {},
//     {},
//     {}
// }