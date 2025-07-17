let score = 102;
let bounus = 25;

let totalScore = (score = bounus);

let addition = 4 + 5;
// let subtract = 9 - 4;
let mul = 6 * 7;
let div = 10 / 2;
// let reminder = 9 % 2;

let exponent = 2 ** 4;

let myscore = 110;
myscore++;

let credits = 56;
credits--;

// Comaparision operation

let num1 = 3;
let num2 = 3;
let num3 = 6;

// console.log(num1 == num2);
// console.log(num1 !== num3);

// assignment operator

let number1 = 10;
number1 += 5;

// console.log(number1);

const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}
console.log(add());

// Subtract small value from larger one
function subtract() {
  return b - a;
}
console.log(subtract());

function multiply() {
  return a * b;
}
console.log(multiply());

// Divide larger value by small
function divide() {
  return b / a;
}
console.log(divide());

// Increase value of a by 1
function increment() {
  return a + 1;
}
console.log(increment());

// Decrease value of b by 1
function decrement() {
  return b - 1;
}
console.log(decrement());

// Divide larger value by small to find the reminder
function reminder() {
  return b % a;
}
console.log(reminder());
