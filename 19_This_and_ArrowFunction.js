const user = {
    username: "Sumit",
    price: "100",

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`)
        // console.log(this)
    }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this)   // it is empty bcoz.. it is in node environment








function chai() {
    let username =  "Sumit"
    console.log(this.username)
}
chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }

const chai =  () => {                        // Arrow-Function
    let username = "hitesh"
    console.log(this.username)
}
chai() 











// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 10));




// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)            /* If we use implicit return we just use () to return the value instead to using {}.   if we use {} then we have to write return inside it

const addTwo = (num1, num2) => ({username: "Sumit"})                                                           
console.log(addTwo(3, 10));



const myArray = [2, 4, 6, 7, 8]
myArray.forEach()