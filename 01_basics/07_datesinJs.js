// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); -> get value in milliseconds of any date.
// console.log(Math.floor(Date.now()/1000)); -> get value in seconds of any date.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // getMonth() starts from 0, so January is 0, February is 1, etc.
console.log(newDate.getDay()); // getDay() returns the day of the week (0 for Sunday, 1 for Monday, etc.)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    //timeZone: 'now',
    
})