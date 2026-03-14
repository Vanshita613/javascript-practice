//ARRAYS

let _marks = [88, 59, 85, 30];
console.log(_marks);

//array loop

let sub = ["maths", "chemistry", "physics", "english", "hindi"];
console.log(sub[2]);


let names = ["sia", "colby", "sam", "jin", "niki"];

for (let idx = 0; idx < names.length; idx++) {
    console.log(names[idx]);
}

//for of

for (let name of names) {
    console.log(name);
}



//QUESTION-1. Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let marks = [78, 94, 88, 93, 76, 65];

let sum = 0;

for (let val of marks) {
    sum = +val;

}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`)


//QUESTION-2 



let items = [250, 645, 300, 900, 50];
let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after =${items}`);
//     i++;
// }

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;

}
console.log(items);



//ARRAY METHODS

//push - add to end

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);


//pop - delete from the end an return
// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log(foodItems);

// foodItems.pop();

// console.log(foodItems);


// //toString - converts arrays to string
// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log(foodItems);

// console.log(foodItems.toString());



//CONCAT - JOINS MULTIPLE ARRAYS AND RETURN RESULT
let marvelHeroes = ["thor", "ironman", "spiderman"];
let dcHeroes = ["superman", "batman"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);


//unshift - add to start
let countries = ["china", "korea", "japan"];

countries.unshift("thailand");


//slice - return a piece of the array  
let movies = ["alive", "parasite", "myname", "bloodhounds"];

console.log(movies);

console.log(movies.slice(1, 3));

//splice - change original array (add,remove,replace)
let arr = [1, 2, 3, 4, 5, 5, 6, 7];

//arr.splice(2,2,101,102);

//ADD ELEMENT
//arr.splice(2,0,101);

//DELETE ELEMENT
//arr.splice(3, 1);

//REPLACE ELEMENT 
arr.splice(3, 1, 101);



//QUESION - 1 CREATE AN ARRAY TO STORE COMPANIES -> "BLOOMBERG","MICROSOFT" , "UBER", "GOOGLE", "IBM", "NETFLIX"
//a. Remove the first company from the array
//b. Remove Uber &Add Ola in its place
//c. Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();

//companies.splice(2, 1, "Ola");

companies.push("Amazon");