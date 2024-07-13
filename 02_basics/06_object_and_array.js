// Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables
// in a more concise and readable way. This feature can make your code cleaner and easier to understand.
// Here are some key concepts and examples to help you understand object destructuring:

// Basic Object Destructuring
// Extracting Properties
// You can extract properties from an object and assign them to variables using curly braces {}.
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

const { name, age, city } = person1;

console.log(name); // "John"
console.log(age);  // 30
console.log(city); // "New York"

// Default Values
// You can assign default values to variables in case the property does not exist in the object.
const person2 = {
    name: "John",
    age: 30
};

const { name, age, city = "Unknown" } = person2;

console.log(city); // "Unknown"

// Renaming Variables
// You can rename variables when destructuring by using a colon :.


const person3 = {
    name: "John",
    age: 30
};

const { name: fullName, age: years } = person3;

console.log(fullName); // "John"
console.log(years);    // 30

// Nested Object Destructuring
// You can destructure nested objects by specifying the path to the property.
const person4 = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
};

const { name, address: { city, zip } } = person4;

console.log(name); // "John"
console.log(city); // "New York"
console.log(zip);  // 10001

// Destructuring with Functions
// Passing Objects as Function Parameters
// You can destructure objects directly in the function parameter list.

function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person5 = {
    name: "John",
    age: 30
};

printPerson(person5); // "Name: John, Age: 30"

// Returning Objects from Functions
// You can also destructure objects returned from functions.
function getPerson() {
    return {
        name: "John",
        age: 30,
        city: "New York"
    };
}

const { name, age, city } = getPerson();

console.log(name); // "John"
console.log(age);  // 30
console.log(city); // "New York"

// Combined with Array Destructuring
// You can combine object and array destructuring for more complex structures.
const user = {
    id: 1,
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

// Rest Properties
// You can use the rest operator ... to collect the remaining properties into a new object.
const person6 = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const { name, age, ...rest } = person6;

console.log(name); // "John"
console.log(age);  // 30
console.log(rest); // { city: "New York", country: "USA" }

// Practical Example
// Here is a practical example of using object destructuring in a more complex scenario:
const person10 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "traveling"]
};

function displayPerson({ name, age, address: { city }, hobbies: [hobby1, hobby2] }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    console.log(`Hobbies: ${hobby1}, ${hobby2}`);
}

displayPerson(person10);
// Output:
// Name: John
// Age: 30
// City: New York
// Hobbies: reading, traveling

//Object destructuring is a powerful feature that can simplify your code and make it more readable,
// especially when dealing with complex objects and nested structures.