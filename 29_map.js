 const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })
//console.log(newNums) 



// chaining : In chaining we use more than one method  
const newNums = myNumbers.map((num) => {
    return num * 10
})
.map( (num) => {                    // map m kuch bhi print hoga....
    return num + 1 
})
.filter( (num) => {               // here, we use chaining technique, we use map and filter both in these one code.
    return num >= 40
})  

console.log(newNums)