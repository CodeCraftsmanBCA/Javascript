// function sayMyName(){
// console.log("S");
// console.log("U");
// console.log("M");
// console.log("I");
// console.log("T");
// }

// sayMyName();

// function addTwoNumber(number1, number2){  // <<= This is Parameters
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){  // <<= This is Parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, 5);   // <<= This is Arguments

console.log(result)


function loginUserMessage(username) {
    return `${username} just logged in `
}
console.log(loginUserMessage("Sumit")) 