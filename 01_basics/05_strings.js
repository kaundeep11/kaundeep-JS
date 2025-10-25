const name = "Rajdeep"
const repoCount = 5

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rajdeep-hc-com')

// console.log(gameName[0]); ->  to check key value pair
// console.log(gameName.__proto__); -> to check prototype of the object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // character present at position 2.
console.log(gameName.indexOf('d')); // character at which position 'd' is present

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 5)
console.log(anotherString);

const newStringOne = "   Deep    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajdeep.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));