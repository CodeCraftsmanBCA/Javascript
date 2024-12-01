// =============================== for of loops ====================================
// ["", "", "", ""]
// [{}, {}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}





//String
const greetings = "Hello Duniya"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}





//Maps
const map = new Map()
map.set('JH', "Jharkhand")
map.set('BR', "Bihar")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, `:-`, value)
}



// const myObject = {
//     game1: "NFS",
//     game2: "GTA-V"
// }
// for (const allgames of myObject) {
//     console.log(allgames)
// }


// =============================== for in loops ====================================


const myObject = {
    js: 'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}






const programming = ["js", "py", "rb", "cpp", "java", "swift"]
for (const key in programming) {
    console.log(`These are the programming language: ${programming[key]}`)
}