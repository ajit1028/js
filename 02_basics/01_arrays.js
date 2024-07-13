// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// join()=>Joins all elements of an array into a string.
// const newArr = myArr.join()

// console.log(myArr);//string type
// console.log( newArr);



//myarr = [0, 1, 2, 3, 4, 5]
// slice(s,e)==>[s to e-1] return ner arraay from s to e-1 but not change in original array
//splice(s,e)==>[s to e] cut the array from s to e and return ner array and also change in origional array [s-1 to e+1]

console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3,"added")
console.log("C ", myArr);//C  [ 0, 'added', 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]


// indexOf()=>Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let newarr=[ 0, 1, 2, 3, 4, 5 ]
let index = newarr.indexOf(2);
console.log(index); // 2


// sort()=>Sorts the elements of the array in place and returns the array.