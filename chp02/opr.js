//ARITHMETIC OPERATORS


let a = 9;
let b = 8;
console.log("a =", a, "& b =", b);
console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);
console.log("a**b=", a ** b);

//URINARY OPERATOR//
console.log("a++", a++); // 9 , first print then increase  
console.log(a); //10

console.log("++a", ++a); //11 , first increase then print
console.log(a); //11

console.log("a--", a--); //9 
console.log(a); //8

console.log("--a", --a); //8
console.log(a); //8


//LOGICAL OPERATORS

//logical AND

let c = 6;
let d = 5;


let cond1 = c > d; //true
let cond2 = c === 6; //true
console.log(cond1 && cond2); //true


let cond3 = c > d //true
let cond4 = d === 6; //false
console.log(cond3 && cond4); //false

//logical OR

let cond5 = c > d; //true
let cond6 = d === 6; //false
console.log(cond5 || cond6); //true
