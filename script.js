//pratice q1
// let num = prompt("Enter a num")

// if(num % 5 === 0) {
//     console.log(num, " is multiple by 5")
// }
// else{
//     console.log(num, " is not multiple by 5")
// }




//pratice q2
let score = prompt("Enter your Score")
let grade;

if(score >= 90 && score <= 100) {
    grade = "A"
}
else if(score >= 70 && score <= 89) {
    grade = "B"
}
else if(score >= 60 && score <=69) {
    grade = "C"
}
else if(score >= 50 && score <= 59) {
    grade = "D"
}
else if(score >= 0 && score <= 49) {
    grade = "F"
}
console.log("According to your score, your grade was : ", grade);








function sumit(a=20,b=10,c=0){
    a += 1;
    b += 2;
    c += 3;

    return console.log('val of a,b,c:',a,b,c );
    
}

sumit(76,88);