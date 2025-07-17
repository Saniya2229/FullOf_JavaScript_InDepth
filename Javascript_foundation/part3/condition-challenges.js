//  Checking if a number is greater than another number

let num1 = 6;
let num2 = 8;

// if (num1 > num2) {
//   console.log(`${num1} is grater than ${num2}`);
// } else {
//   console.log(`${num1} is not grater than ${num2}`);
// }

/*
console.log(" I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not a greater than num2");
}

console.log(" I am regular bottom code");
*/

// cheking if a string is equal to another string

let username = "Lily";
let anotherUsername = "Lily";

if (username === anotherUsername) {
  console.log(`${username} and ${anotherUsername} both are same`);
} else {
  console.log(`${username} and ${anotherUsername} both are not same`);
}

// checking if a variable is number or not

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

// checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("tea is ready");
} else {
  console.log("Tea is NOT ready");
}

// checking if array is empty or not

let items = [];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
