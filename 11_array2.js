const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const DC_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(DC_heros)
// const AllHeros = marvel_heros.concat(DC_heros)

// console.log(AllHeros);

const all_new_heros = [...marvel_heros, ...DC_heros]
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity)  // <<= ye saaara array ko ek hi array me print krta hai !!!
console.log(real_another_array)

console.log(Array.isArray("Sumit"))
console.log(Array.from("Sumit"))
console.log(Array.from({name: "Sumit"}))  // <<= Interesting.. bcozz it will not convert {name: "Sumit"}.. we have to tell to make array with keys or value..

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));