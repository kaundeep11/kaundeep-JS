// array -> js array are zero-indexed, the first element is at index 0
// array is a collection of items, can be of any type, can be of mixed types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) 
// myArr.pop() -> removes the last element from the array
// myArr.unshift(9) -> adds an element to the beginning of the array
// myArr.shift() -> removes the first element from the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); -> returns the index of the first occurrence of the element, -1 if not found

// const newArr = myArr.join()

// console.log(myArr); 
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice(start, end) -> returns a shallow copy of a portion of an array (end not included)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice(start, deleteCount) -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("C ", myArr);
console.log(myn2);