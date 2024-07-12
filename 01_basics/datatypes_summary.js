//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof bigNumber);



// https://262.ecma-international.org/5.1/#sec-11.4.3


//================================================
//Stack(premitive) 

let name ="sagar"
let newName = name;
newName = "rakesh"
console.log(name);
console.log(newName);


//heap (Non-premitive)
let userOne ={
    email:"bholu@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userOne.email = "ajit@google.com"

console.log(userOne.email);
console.log(userTwo.email)