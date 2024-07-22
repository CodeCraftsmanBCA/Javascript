// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')     //---They both are different----

console.log(id === anotherId);


// Reference (NON PRIMITIVE)

// Array, Objects, Functions

const heros = ["Spiderman", "Thor", "Ironman"]
let myObj = {
    name: "Sumit",
    age: 17
}

const myFunction = function(){ 
    console.log("Hello Duniya")
}


//**************************************************************************** */


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "gamer"
let anotherName = myYoutubename
anotherName = "verse"

console.log(anotherName)


//If we see STACK we get copies of the value whereas, IN Heap we get the reference of the value.. as we see in myYoutubeName(Full Code) CODE..