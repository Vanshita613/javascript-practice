// function myFunction() {
//     console.log("Welcome to Shanghai!");
//     console.log("I love shanghai");
// }
// myFunction();



//function -> sum of number
// function sum(a,b){
//     console.log(a+b);
// }

// //return value
// function sum(a, b) {
//     s = a + b;
//     return s;
// }
// let val = sum(8, 8);
// console.log(val);


//arrow fnct
const arrowSum = (a, b) => {
    console.log(a + b);
};


//multiplication funt
const arrowMul = (x, y) => {
    console.log(x * y);
}

const printHello = () => {
    console, log("hello");
}




//QUESTION-1.  create a function using the "function" keyword that takes a string as an argument returns the number of vowels on the string.

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;

        }
    }

    console.log(count);
}


//QUESTION-2.  Create an arrow funtion to perform the same task.


const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;

        }
    }

    return count++;
}


//for each
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
});