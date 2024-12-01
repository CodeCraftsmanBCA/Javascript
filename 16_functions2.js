function calculateCartPrice(val1, val2, ...num1){      // <<= (...num1) me ye tripal dot rest operator hai and isi ko spread operator bhi kehte hai.
    return num1
}
console.log(calculateCartPrice(200, 4000, 10000, 500))



//--------------------- Object on Function ----------------------------


const user = {
    username: "Sumit",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({
    username: "Sumit",
    price: 199
})



// ---------------------------- Array in Function ------------------------

mynewArray = [200, 300, 4000, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(mynewArray))