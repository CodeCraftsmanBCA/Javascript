// const bgmiUser = new Object()
const bgmiUser = {} 

bgmiUser.id = "123abc"
bgmiUser.name = "Sumit"
bgmiUser.isLoggedIn = false

console.log(bgmiUser);

const regularUser = {
    email: "sumitverse@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sumit",
            lastname: "Kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3) 


const users = [
    {
    id: 1,
    email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
        },
        {
            id: 1,
            email: "S@gmail.com"
            } 
]

users[1].email
console.log(bgmiUser);

console.log(Object.keys(bgmiUser));  // <<= This will print all the objects keys/names... Interesting
console.log(Object.entries(bgmiUser));

console.log(bgmiUser.hasOwnProperty('isLoggedIn'))