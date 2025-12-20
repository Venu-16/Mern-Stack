// functions are reusable blocks of code designed to perform a specific task. 
// They can take inputs (parameters), process them, and return outputs (values).

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// calling function
console.log(greet("Venu Madhav"));

// Function Expression
const add = function(a, b){
    return a+b;

}

console.log(add(5, 10));

//Arrow Function

const multiply = (a,b) =>{
    return a*b;
}

console.log(multiply(4, 6));

// If the function has a single expression, you can omit the curly braces and the return keyword
const square = x => x * x;

console.log(square(7));

// Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(3));      // Uses default exponent 2
console.log(power(2, 3));   // Uses provided exponent 3