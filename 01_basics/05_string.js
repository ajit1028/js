const name = "bholu"
const repoCount = 30

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);

//charAt(index)  => Returns the character at the specified index.
const str1 = "Hello";
console.log(str1.charAt(1)); // Output: "e"


//charCodeAt(index) => Returns the Unicode value of the character at the specified index.
const str2 = "Hello";
console.log(str2.charCodeAt(0)); // Output: 72

// concat(str1, str2, ...)=>Combines one or more strings into the existing one.
const str3 = "Hello";
const str4 = " world";
console.log(str3.concat(str4)); // Output: "Hello world"


// includes(searchString, position)=>Checks if a string contains the specified substring.
const str5 = "Hello world";
console.log(str5.includes("world")); // Output: true


// indexOf(searchValue, fromIndex)=>Returns the index of the first occurrence of a specified value in a string.
const str6 = "Hello world";
console.log(str6.indexOf("world")); // Output: 6

// lastIndexOf(searchValue, fromIndex)=>Returns the index of the last occurrence of a specified value in a string.
const str7 = "Hello world";
console.log(str7.lastIndexOf("o")); // Output: 7


// slice(startIndex, endIndex)=>Extracts a section of a string and returns it as a new string.
const str8 = "Hello world";
console.log(str8.slice(6, 11)); // Output: "world"
// console.log(str8);//Hello world


// substring(startIndex, endIndex)=>Similar to slice(), but doesn't accept negative indices.
const str9 = "Hello world";
console.log(str9.substring(6, 11)); // Output: "world"


// toLowerCase()=>Converts all characters to lowercase.
const str10 = "Hello WORLD";
console.log(str10.toLowerCase()); // Output: "hello world"


// toUpperCase()=>Converts all characters to uppercase.
const str11 = "Hello world";
console.log(str11.toUpperCase()); // Output: "HELLO WORLD"


// trim()=>Removes whitespace from both ends of a string.
const str12 = "   Hello world   ";
console.log(str12.trim()); // Output: "Hello world"

// replace(searchValue, newValue)=>Replaces a specified value with another value in a string.
const str13 = "Hello world";
console.log(str13.replace("world", "JavaScript")); // Output: "Hello JavaScript"


// split(separator, limit)=>Splits a string into an array of substrings based on a specified separator.
const str14 = "He,llo,wo,rld";
console.log(str14.split(",")); // Output: [ 'He', 'llo', 'wo', 'rld' ]

// startsWith(searchString, position)=>Checks if a string starts with the specified characters.
const str15 = "Hello world";
console.log(str15.startsWith("Hello")); // Output: true


// endsWith(searchString, length)=>Checks if a string ends with the specified characters.
const str = "Hello world";
console.log(str.endsWith("world")); // Output: true