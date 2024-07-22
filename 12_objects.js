//singleton object
Object.create

// Object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Sumit",
    full_name: "Sumit Kumar",
    [mysym]: "key1",      // <<= Syntax for Symbol [] (square_bracket)
    age: 18,
    location: "Balumath",
    email: "sumitverse26@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full_name"])
// console.log(typeof mysym)
// console.log(JsUser[mysym]) 

JsUser.email = "sumitkumar@chatgpt.com"
//Object.freeze(JsUser)  // <<= '.freeze' use krne se ab tk jitna changes hua hai wahi apply hoga.. iske bd koi changes JsUser me nhi apply hoga..
// console.log(JsUser)

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greetingTwo())