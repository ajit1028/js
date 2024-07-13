// Basic Array Destructuring
// Extracting Values
// You can extract values from an array and assign them to variables using square brackets [].


const numbers1 = [1, 2, 3];

const [a, b, c] = numbers1;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping Values
// You can skip values in an array by leaving a blank space between commas.

javascript
Copy code
const numbers = [1, 2, 3, 4];

const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3
Default Values
You can assign default values to variables in case the array does not have enough elements.

javascript
Copy code
const numbers = [1, 2];

const [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
Swapping Variables
Array destructuring can be used to swap the values of variables.

javascript
Copy code
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
Using the Rest Operator
You can use the rest operator ... to collect the remaining elements into a new array.

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
Nested Array Destructuring
You can destructure nested arrays by specifying the structure.

javascript
Copy code
const nestedArray = [1, [2, 3], 4];

const [a, [b, c], d] = nestedArray;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
Combined with Object Destructuring
You can combine array and object destructuring for more complex structures.

javascript
Copy code
const user = {
    name: "John",
    friends: [
        { name: "Jane", age: 25 },
        { name: "Mark", age: 27 }
    ]
};

const {
    name: userName,
    friends: [
        { name: friend1Name },
        { name: friend2Name }
    ]
} = user;

console.log(userName);    // "John"
console.log(friend1Name); // "Jane"
console.log(friend2Name); // "Mark"
Practical Example
Here is a practical example of using array destructuring in a function:

javascript
Copy code
function getFirstTwoElements([first, second]) {
    console.log(first);
    console.log(second);
}

const numbers = [1, 2, 3, 4];

getFirstTwoElements(numbers);
// Output:
// 1
// 2
Destructuring with Function Parameters
You can destructure arrays directly in the function parameter list.

javascript
Copy code
function printNumbers([first, second, third]) {
    console.log(first);
    console.log(second);
    console.log(third);
}

const numbers = [1, 2, 3];

printNumbers(numbers);
// Output:
// 1
// 2
// 3