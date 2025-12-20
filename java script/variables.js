alert("hello world");
console.log("hello world");

// without keyword, its same as var and not allowed in strict mode

//using var

var price = 100;

// using let

let ispermanent = false;

// using const
// can not be changed or reassigned
const s = "jack";

// var is functional scope level 
// let ans const are block scope

// when you access a variable before declaring

//with var in non-strict mode, the variable will have an undefined value
// that implies variable declared but not assigned.

// In strcit mode we get refference error

//with let and const, you will always get refference error.

// best practices
// 1. don't use var 
// 2. use let or const
// 3. use const more offen
// 4. use let, when you need to reassign

