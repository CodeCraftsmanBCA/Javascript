// Immediately Invoked Function Expressions (IIFE)


(function chai() {

    console.log(`DB CONNECTED`);
    // named IIFE
})();   // There is a problem with global scope pollution so to remove there declaration we use IIFE.


( (name) => {
    console.log(`DB CONNECTED TWO${name}`)
} ) (" Sumit"); 