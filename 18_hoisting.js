function one() {
    const username = "Sumit"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()


}
one()

if(true) {
    const username = "Sumit"
    if(username === "Sumit") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

// +++++++++++++++++++ INTERESTING +++++++++++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5));  // here we can access it if we call before(line31) function also.




const addtwo = function(num) {
    return num + 2
}

addtwo(5)  // here it will gives error if we call before the function(line40) because it is kept in variable
