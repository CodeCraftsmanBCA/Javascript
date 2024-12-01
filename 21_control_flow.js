// if

const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 41) {
    console.log("Temperature is less than 50 degree")

} 
else {
    console.log("Temperature is greater than 50 degree.\n")
}

console.log("\nThanks for checking Temperature.")

// < less than
// > greater than 
// <= less than equal to
// >= greater than equal to 
// == equal to
// != Not equal to 
// === strictly check 

const score = 200;
if (score > 90) {
    var power = "fly"
    console.log(`User power: ${power}`)
}
console.log(`Now you can ${power}`);




const balance = 1000

if(balance > 500) console.log("Test"),    // (Implicit scope) we cannot write multiple times. If we want to write multiple line we have to use , 
console.log("Test 2");

// Nesting If-else with same variable (const balance = 1000)

if(balance < 500) {
    console.log("less than 500")
}
else if(balance < 700) {
    console.log("less than 700")
}
else if(balance < 900) {
    console.log("less than 900")
}
else {
    console.log("less than 1200");
}


// ================ REAL LIFE EXAMPLE ----------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {                         // && operator check both condition are true or not.. if any one condition is false then it will not work
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail) {           // || operator ko dono m se koi ek condition bhi sahi hona chaiye.. 
    console.log("User logged in");
}




//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



// Terniary Operator

// SYNTAX =>  condition ? ture : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")