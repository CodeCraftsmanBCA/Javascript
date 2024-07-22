//Dates

let myDate = new Date() // <<= Date is a object in JAVASCRIPT
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 7, 26, 5, 45)  // <<= Here we can create our own Date
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate) // <<= As usual, This will print DATE
console.log(newDate.getMonth()) // <<= This will print the Month
console.log(newDate.getDay()) // <<= This will print the Day

newDate.toLocaleString('default', {
    weekday: "long"
    
})