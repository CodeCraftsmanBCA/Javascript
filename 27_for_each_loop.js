const coding = ["java", "javascript", "python", "c++", "swift", "ruby"]

// coding.forEach( function (item) {
//     console.log(item)
// } )


coding.forEach( (item) => {              // using arow function
    console.log(item)
})


function printMe(item) {                 // by giving reference of a function
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )

const mycoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
    },

]

mycoding.forEach( (programming) => {
    console.log(programming.languageName)
}) 