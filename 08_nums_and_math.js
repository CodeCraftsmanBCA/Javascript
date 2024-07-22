const score = 100;
console.log(score);


const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.7843
console.log(otherNumber.toPrecision(3));

const hundreds = 1000  //<<=By Default it is in US standard..
console.log(hundreds.toLocaleString('en-IN')); //<<=This is used to give',' to any country standard.. example : here is INDIA



// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // <<= The abs means absolute value is used to change the negitive value into positive.. it only change negative value to positive value.. nothing else... 
console.log(Math.round(4.6)); // <<= this is used to round-off the value.
console.log(Math.ceil(4.2)); // <<== This is used when - if any number is greater ex. 4.1, 5.2, 1.1 these are greater by '(.) point' so it will change to next number 
console.log(Math.floor(4.2)); // <<== opposite to ceil
console.log(Math.min(4, 2, 5, 7, 8, 3, 10)); // <<= This will return the minimum value in the array.
console.log(Math.max(4, 2, 5, 7, 8, 3, 10)); // <<= This will return the maximum value in the array.


console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1) // <<= We are giving +1 because of avoiding the return = 0.


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


