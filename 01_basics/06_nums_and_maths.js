const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++

// console.log(Math);  -> object
// console.log(Math.abs(-4)); -> negative changes in to positive.
// console.log(Math.round(4.6)); -> round off
// console.log(Math.ceil(4.2)); -> top value lega 4 se jyada h 4.2 to ye 5 show karega.
// console.log(Math.floor(4.9)); -> niche wali value lega lowest value.
// console.log(Math.min(4, 3, 6, 8)); -> find lowest value.
// console.log(Math.max(4, 3, 6, 8)); -> find max value.

console.log(Math.random()); // -> less than 1 and it is taken random no.
console.log((Math.random()*10) + 1); // -> in this min value is 1.
console.log(Math.floor(Math.random()*10) + 1); // -> give decimal free values.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)