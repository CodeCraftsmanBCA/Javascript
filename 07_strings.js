const name = "Sumit"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello My Name is ${name} and my repo is ${repoCount}`)  

const gameName = new String('Sumit')

console.log(gameName)
console.log(gameName[1]); //through [0,1,2] we can access the key of the string.
console.log(gameName.__proto__) // we can see object

// let gamecounter = "demon_slayer"
console.log(gamecounter.length)

console.log(gamecounter.toUpperCase()) //<<-- Change the lowercase string to upper-case string.

console.log(gamecounter.charAt(9)); //<<-- Through this we can check on 9th position which character is available.

console.log(gamecounter.indexOf('a')); //<<-- Through this we can see that what is the position of 'a' in the string..

let gamecounter = "demon_slayer"
const newString = gamecounter.substring(0, 4) // <<= Through substring we can print the character from where we want ex, from 0 position to 4th position character will be print.
console.log(newString); 

// let gamecounter = "demon_slayer"
const anotherString = gamecounter.slice(-11, 4) // <<= Here, we can use negative value and if we use neg. value it will print from reverse..
console.log(anotherString);

const newStringOne = "Sumit "
console.log(newStringOne.trim());  // <<= trim is used to avoid the space or trim the unnecessary memory from the code 

const url = "https://sumit.com//sumit%20kumar";
console.log(url.replace('%20', '-')) // <<= This is u sed to replace the code by using .replace

console.log(url.includes('sumit')) // <= this is used to check that keyword is available or not for ex.('sumit') is available..


// let gamecounter = "demon_slayer"
console.log(gamecounter.split('_'));  //<<== the 'split' is used to split the name or anything in the code on the basis of our own..


