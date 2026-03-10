//FOR LOOPS

//PRINT 1 TO 5
for (let count = 1; count <= 5; count++) {
    console.log("javascript"); //5 times exeute
}


// CALCULATE SUM OF 1 TO 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum=", sum); // sum=15


//WHILE LOOP

let i = 1;
while (i <= 7) {
    console.log("i=", i);
    i++;
}

//DO-WHILE LOOP

let j = 20;

do {
    console.log("hello!");
    j++;
} while (j <= 10); //hello!



//FOR-OF LOOP

let str = "Vanshita";

for (let i of str) {
    console.log("i=", i);
}

//output

// i = V
// i = a
// i = n
// i = s
// i = h
// i = i
// i = t
// i = a

let nm = "javascript";

let size = 0;
for (let val of str) {
    console.log("val=", val);
    size++;
}
console.log("string size=", size); //8

// //for in loop

// let student = {
//     name: "choi san",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for (let i in student) {
//     console.log(i);
// }

// //output
// //  name
// //  age
// //  cgpa
// //  isPass

// for (let key in student) {
//     console.log("key=", key, "value=", student[key]);
// }

// //output
// // key = name value = choi san
// // key = age value = 20
// // key = cgpa value = 7.5
// // key = isPass value = true                                                     

// //QUESTION1 PRINT ALL EVEN NUMBERS FROM 1TO 100

// for (let num = 1; num <= 100; num++) {
//     if (num % 2 === 0) {
//         console.log("num=", num);
//     }
// }

//QUESTION-2 CREATE A GAME WHERE YOU START WIRH ANY RANDOM GAME NUMBER. ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTIL THE USER ENTER THE CORRECT NUMBER.

let gameNum = 10;

let userNum = prompt("guess the game number: ");

while (userNum != gameNum) {
    userNum = prompt("you entered the wrong game number: ");

}

console.log("congrats, you entered the right number");