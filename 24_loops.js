// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);

}  




for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`)
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        console.log(i + "*" + j + " = " + i * j )
    }
    
    
}


// =============================== Loop in Array ====================================

let MyArray = ["flash", "batman", "superman"]
console.log(MyArray.length)
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
}


for(let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        //break;                          // Control flow ruk jaata hai after using break. agar woh condition match hua tohh..
        continue;                         // continue ek baar k liye skip krta hai condition match hone k bd bhi..
    }
    console.log(`Value of i is: ${i}`);
}