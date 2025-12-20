 //Map -  Transform Each Item 
// Purpose: Creates a new array by applying a function to each element.
// Key Point: Same length as the original array.

const nums = [1,2,3,4,5];

const squared = nums.map(x=>x*x);
console.log(squared);

//Filter - Select Items Based on Condition
// Purpose: Creates a new array with elements that pass a test.
// Key Point: Length can be less than or equal to the original array.

const evennums = nums.filter(x => x%2==0);
console.log(evennums);

//Reduce - Accumulate Values
// Purpose: Reduces the array to a single value by applying a function.
// Key Point: Returns a single value (not an array).

const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//forEach - Execute Function for Each Item
// Purpose: Executes a provided function once for each array element.
// Key Point: Does not return a new array or value.

nums.forEach(x => console.log(x * 2));

//Find - Locate First Matching Item
// Purpose: Returns the first element that satisfies a condition.
// Key Point: Returns a single element or undefined.

const firstEven = nums.find(x => x % 2 === 0);
console.log(firstEven);

//Some - Check If Any Item Matches Condition
// Purpose: Tests whether at least one element passes a test.
// Key Point: Returns true or false.

const hasNegative = nums.some(x => x < 0);
console.log(hasNegative);

//Every - Check If All Items Match Condition
// Purpose: Tests whether all elements pass a test.
// Key Point: Returns true or false.

const allPositive = nums.every(x => x > 0);
console.log(allPositive);
//Sort - Arrange Items in Order
// Purpose: Sorts the elements of an array in place.
// Key Point: Modifies the original array.

const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b);
console.log(unsorted);

//Concat - Merge Arrays
// Purpose: Merges two or more arrays into a new array.
// Key Point: Does not modify the original arrays.

const moreNums = [6,7,8];
const combined = nums.concat(moreNums);
console.log(combined);

//Slice - Extract Portion of Array
// Purpose: Returns a shallow copy of a portion of an array.
// Key Point: Does not modify the original array.

const part = nums.slice(1, 4); // Extracts elements from index 1 to 3
console.log(part);