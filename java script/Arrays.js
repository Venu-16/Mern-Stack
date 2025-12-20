const nums = [1,2,3,4,5];

// Accessing elements
console.log(nums[0]); // 1
console.log(nums[2]); // 3

nums[2] = 10;
console.log(nums); // [1, 2, 10, 4, 5]

// creating usinf Array constructor

const fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits);

fruits.length   // Returns the number of elements
fruits.sort()   // Sorts the array

fruits.push("Date") // Adds an element to the end


//Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.  

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"

A Common Error
const points = [40];
//is not the same as:

const points1 = new Array(40);
// Create an array with one element:
const points2 = [40];
// Create an array with 40 undefined elements:
const points3 = new Array(40);

//The problem is that the JavaScript operator typeof returns "object":
let type = typeof fruits;

console.log(type); // object