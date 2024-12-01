let a = 400  // <<= This is independent/ Global Scope.. 


if(true) {
let a = 10;
const b = 20;
var c = 30;
}


console.log(a);
// console.log(b);  
// console.log(c);   // <<= out of scope also var value is printed thats why we dont use var..
