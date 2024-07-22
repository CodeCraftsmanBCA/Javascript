// Array

const myHeros = ["Thor", "Shatiman"]
console.log(myHeros);

// let myArr = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr[2]);

// Array Methods

myArr.push(8)  // <<= Through push, we can add values in the array..
myArr.pop()  // <<= pop, will remove the last value of the array..

myArr.unshift(9) // <<= BEKAAR HAI, on the first it add the value. Example : [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
myArr.shift()  // <<= This will remove the value of unshift.. (it not contain any parameter)


// let myArr = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr.includes(9));  // <<= The 'include' is used to check the value is there in array or not.. 
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

// Slice, Splice
let myArr = [0, 1, 2, 3, 4, 5, 6, 7]

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B ", myArr)
const myn2 = myArr.splice(1, 3)
console.log(myn2);
