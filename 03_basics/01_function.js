// Function Declaration
// A function declaration defines a named function.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // "Hello, John!"

// Function Expression
// A function expression defines a function as part of a larger expression, typically assigned to a variable.
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // "Hello, John!"

// Arrow Functions
// Arrow functions provide a concise syntax and do not have their own this, arguments, super, or new.target.
const greet = (name) => `Hello, ${name}!`;
console.log(greet("John")); // "Hello, John!"

// Multi-Line Arrow Functions
// For functions with more than one statement, use curly braces {} and the return keyword.
const add = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(add(2, 3)); // 5

// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined.
(function() {
    console.log("IIFE is executed immediately!");
})();
// Function Parameters and Arguments
// Default Parameters
//Default parameters allow you to initialize function parameters with default values if no arguments are provided.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("John")); // "Hello, John!"
// Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
// Function Return Value
// Returning Values
// Functions can return values using the return keyword.
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
console.log(result); // 5

// Returning Objects
// Functions can return objects.
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const person = createPerson("John", 30);
console.log(person); // { name: "John", age: 30 }

// Function Scope and Closures
// Function Scope
// Variables declared within a function are local to that function.
function greet() {
    let message = "Hello";
    console.log(message);
}
greet(); // "Hello"
// console.log(message); // Error: message is not defined
// Closures
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Higher-Order Functions
// Higher-order functions are functions that take other functions as arguments or return functions as their result.
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}

const greetJohn = greet("John");
greetJohn("Hello"); // "Hello, John!"
greetJohn("Goodbye"); // "Goodbye, John!"

// Callback Functions
// A callback function is a function passed into another function as an argument and is executed after some operation has been completed.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((data) => {
    console.log(data); // "Data received"
});

// Asynchronous Functions
// Promises
// Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data); // "Data received"
});
// Async/Await
// async and await provide a way to handle asynchronous operations in a more synchronous manner.

async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
    console.log(data); // "Data received"
}

fetchData();
// Function Methods
// call()
// The call() method calls a function with a given this value and arguments provided individually.

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };
greet.call(person, "Hello"); // "Hello, John!"
// apply()
// The apply() method calls a function with a given this value and arguments provided as an array.

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };
greet.apply(person, ["Hello"]); // "Hello, John!"
// bind()
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };
const greetJohn = greet.bind(person);
greetJohn("Hello"); // "Hello, John!"
// Function Properties
// length
// The length property indicates the number of parameters a function expects.

function greet(name, message) {
    console.log(`${message}, ${name}!`);
}

console.log(greet.length); // 2
// name
// The name property returns the name of the function.

function greet() {
    console.log("Hello!");
}

console.log(greet.name); // "greet"
// Functions are a core part of JavaScript, providing essential tools for code organization, 
// reusability, and handling asynchronous operations. Understanding how to define, use, 
// and manipulate functions is crucial for effective JavaScript programming.









