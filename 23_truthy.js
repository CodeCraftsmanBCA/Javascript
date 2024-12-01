const userEmail = "s@gmail.com"

if(userEmail) {
    console.log("Got User E-mail");
} 
else {
    console.log("Don't have user E-mail")
}


// falsy Value => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy value => "0", 'falses', " ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty")
}