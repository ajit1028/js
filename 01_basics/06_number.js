// Declaring numbers
let integer = 42;
let float = 3.14;

// Basic arithmetic operations
let sum = integer + float;       // Addition
let difference = integer - float; // Subtraction
let product = integer * float;    // Multiplication
let quotient = integer / float;   // Division
let remainder = integer % float;  // Modulus (remainder)

console.log(sum);        // 45.14
console.log(difference); // 38.86
console.log(product);    // 131.88
console.log(quotient);   // 13.37696335078534
console.log(remainder);  // 0.08000000000000007


console.log(1 / 0);      // Infinity
console.log(-1 / 0);     // -Infinity
console.log(0 / 0);      // NaN
console.log("abc" / 3);  // NaN


console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(123));        // false
console.log(Number.isNaN("abc" / 3));  // true

//Determines whether the passed value is a finite number=>isFinite()
console.log(Number.isFinite(123));    // true  
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));     // false


//Number.parseInt("StringValue")=>Parses a string and returns an integer. like Number.parseFloat("StringValue")
let intFromString = Number.parseInt("42");
console.log(intFromString); // 42

console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.8));  // 4
console.log(Math.random());    // Random number between 0 and 1


console.log(Math.max(1, 2, 3, 4, 5));  // 5
console.log(Math.min(1, 2, 3, 4, 5));  // 1
console.log(Math.pow(2, 3));           // 8
console.log(Math.sqrt(16));            // 4

//generating number between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // + min is for not giving '0' result
}
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10 (inclusive)



///////chai  aur js
const score = 400;
console.log(typeof score) //  Number
console.log(score.length)//undefind

const value = new Number(100)
console.log(value)//[Number: 100]
console.log(typeof value) //return object //object
console.log(typeof (value.toString()))//string
console.log(value.toString().length)//3
const num = new Number(123.45656)
console.log(num.toFixed(2))//123.46
console.log(num.toFixed(3))//123.457

let val = new Number(1123.456);
console.log(num.toPrecision(3));//return string // "123"
console.log(num.toPrecision(2)); // "1.2e+2"


let n = new Number(123);
console.log(n.valueOf()); // 123


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




