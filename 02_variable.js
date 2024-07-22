const accountId = 329202
let accountEmail = "sumitverse@gmail.com"
var accountpassword = "1234"
accountCity = "Balumath"
let accountState;
 
// accountId = 2 // not allowed >>>> because it is in constant.

console.log(accountEmail)


/*
prefer not to use var 
because of issue in block scope and function scope
*/


console.table({accountId, accountEmail, accountpassword, accountCity, accountState});