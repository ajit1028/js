//JavaScript objects are collections of properties and methods. Each property is a key-value pair,and methods are functions that operate on the object's data.
 // Here’s a comprehensive guide to understanding and working with objects in JavaScript:

// Creating Objects
// Object Literals

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Using the Object Constructor

let personX = new Object();
personX.name = "John";
personX.age = 30;
personX.greet = function() {
    console.log("Hello, " + this.name);
};

//Using a Constructor Function

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, " + this.name);
    };
}

let personA = new Person("John", 30);
let personB = new Person("Jane", 25);

// Accessing and Modifying Properties Dot Notation
console.log(person.name); // "John"
person.age = 31;

// Bracket Notation
console.log(person["name"]); // "John"
person["age"] = 31;


// Methods for Objects
//Object.keys() =>Returns an array of the object’s own property names.

let keys = Object.keys(person);
console.log(keys); // ["name", "age", "greet"]

// Object.values()=>Returns an array of the object’s own property values.
let values = Object.values(person);
console.log(values); // ["John", 31, function() {...}]

//Object.entries()=>Returns an array of the object’s own key-value pairs.
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 31], ["greet", function() {...}]]


// Object.assign()=>Copies all enumerable own properties from one or more source objects to a target object.
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.freeze()=>Freezes an object, preventing new properties from being added and existing properties from being removed or changed.
let frozenObject = Object.freeze({ name: "John" });
frozenObject.age = 30; // This will not change the object
console.log(frozenObject); // { name: "John" }

// Object.seal()=>Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
let sealedObject = Object.seal({ name: "John" });
sealedObject.age = 30; // This will change the object since existing properties are still writable
console.log(sealedObject); // { name: "John", age: 30 }

// Object.create()=>Creates a new object with the specified prototype object and properties.

let prot = { greet: function() { console.log("Hello!"); } };
let newObject = Object.create(prot);
newObject.greet(); // "Hello!"



// Iterating Over Object Properties
// for...in
// Iterates over all enumerable properties of an object.


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Property Descriptors
// Object.defineProperty()
// Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

Object.defineProperty(person, 'height', {
    value: 175,
    writable: true,
    enumerable: true,
    configurable: true
});

// Object.defineProperties()=>Defines multiple new properties directly on an object or modifies existing properties.

Object.defineProperties(person, {
    height: {
        value: 175,
        writable: true,
        enumerable: true,
        configurable: true
    },
    weight: {
        value: 70,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// Object.getOwnPropertyDescriptor()=>Returns the descriptor for a property on an object.

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// { value: "John", writable: true, enumerable: true, configurable: true }

// Inheritance and Prototypes
// Prototypes
// Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
};

let person1 = new Person("John", 30);
person1.greet(); // "Hello, John"

// Object.getPrototypeOf()=> Returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.
let proto = Object.getPrototypeOf(person1);
console.log(proto); // { greet: function() {...} }

//Object.setPrototypeOf()=> Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object.
let newProto = { farewell: function() { console.log("Goodbye!"); } };
Object.setPrototypeOf(person1, newProto);
person1.farewell(); // "Goodbye!"

//JSON Methods
// JSON.stringify()=>Converts a JavaScript object or value to a JSON string.
let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","age":31,"greet":{}}'

// JSON.parse()=>Parses a JSON string, constructing the JavaScript value or object described by the string.
let parsedObject = JSON.parse('{"name":"John","age":31}');
console.log(parsedObject); // { name: "John", age: 31 }

// Object Cloning

// Shallow Copy
// Using Object.assign() or spread operator.
let shallowCopy = Object.assign({}, person);
let shallowCopy2 = { ...person };

// Deep Copy =>Using a library like Lodash or custom recursive function.
let deepCopy = JSON.parse(JSON.stringify(person));

// Other Useful Methods
// hasOwnProperty()=>Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("greet")); // true
//Object.prototype.toString()=> Returns a string representing the object.
console.log(person.toString()); // "[object Object]"
//JavaScript objects are versatile and powerful,
//  allowing for a wide range of functionalities and manipulations. 
//  Understanding these concepts and methods can significantly enhance your ability to work with objects in JavaScript.










