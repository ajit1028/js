// forEach() => Executes a provided function once for each array element.

let allFruits=["Apple", "Blueberry", "Fig", "Grape", "Honeydew"]

allFruits.forEach(fruit => console.log(fruit));
// "Apple"
// "Blueberry"
// "Fig"
// "Grape"
// "Honeydew"

// map()=>Creates a new array with the results of calling a provided function on every element in the calling array.
let upperFruits = allFruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BLUEBERRY", "FIG", "GRAPE", "HONEYDEW"]

// filter()=>Creates a new array with all elements that pass the test implemented by the provided function.
let longNamedFruits = allFruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits); // ["Blueberry", "Honeydew"]

//reduce()=>Executes a reducer function on each element of the array, resulting in a single output value.

let combinedFruits = allFruits.reduce((accumulator, fruit) => accumulator + fruit + " ", "");
console.log(combinedFruits); // "Apple Blueberry Fig Grape Honeydew "

//find()=>Returns the value of the first element in the array that satisfies the provided testing function.
let foundFruit = allFruits.find(fruit => fruit.startsWith("G"));
console.log(foundFruit); // "Grape"

//findIndex()=>Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = allFruits.findIndex(fruit => fruit.startsWith("G"));
console.log(foundIndex); // 3

//every()=>Tests whether all elements in the array pass the test implemented by the provided function.
let allLongNames = allFruits.every(fruit => fruit.length > 3);
console.log(allLongNames); // true

//some()=>Tests whether at least one element in the array passes the test implemented by the provided function.
let someLongNames = allFruits.some(fruit => fruit.length > 10);
console.log(someLongNames); // false