const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course  // <<= for code de-structure we have to simply use this syntax "const {courseInstructor: Instructor} = course"
console.log(Instructor)

// const navbar = () => {

// }
// navbar(company = "Sumit")  // <<= CODE OF REACT.JS for de-destructure




// {
//     "name": "Sumit",
//     "coursename": "js in hindi",
//     "price": "1000"                      
// }                                  // <<= "Json" have keys also string..