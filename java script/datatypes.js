// Primitive types
let name = "Alice";          // String
let age = 25;                // Number
let bigNum = 1234567890n;    // BigInt
let isActive = true;         // Boolean
let notAssigned;             // Undefined
let emptyValue = null;       // Null
let uniqueId = Symbol("id"); // Symbol

// Non-primitive type
let person = { name: "Bob", age: 30 }; // Object

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof bigNum);    // "bigint"
console.log(typeof isActive);  // "boolean"
console.log(typeof notAssigned); // "undefined"
console.log(typeof emptyValue);  // "object" (quirk)
console.log(typeof uniqueId);    // "symbol"
console.log(typeof person);      // "object"
