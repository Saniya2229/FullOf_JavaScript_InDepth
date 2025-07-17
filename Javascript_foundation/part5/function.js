/*
1. Write a function named `makeaTea `that takes one parameter, `typeOfTea` and returns a string like `Making green tea` when called with `green tea `
    stores the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("black tea");
// console.log(teaOrder);

/*
2. create a function named `orderTea` that takes one parameter, `teatype`. Inside this function, create another function named `confirmOrder` that returns message like "Order confirmed for chai."
call `confirmorder` from within `ordertea` and return the result.
*/

function orderTea(teatype) {
  function confirmOrder() {
    return `order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3. write am arrow function named `calculateTotal` that takes two parameeters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(499 * 100);
// console.log(totalCost);

/*
4.
*/

function makeanotherTea(typeOfTea) {
  return `maketea:${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeanotherTea);
// console.log(order);

/*
5.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType} `;
  };
}
let teamaker = createTeaMaker();
// console.log(teamaker("green tea"));

/*
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(input) {
  return !Boolean(input);
}
console.log(flipBoolean(true));
console.log(flipBoolean(false));
console.log(flipBoolean(0));
console.log(flipBoolean(1));
console.log(flipBoolean("hello"));
console.log(flipBoolean(null));
console.log(flipBoolean(undefined));

/*
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
*/

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else {
    return "I'm something else!";
  }
}
console.log(whatAmI(42));
console.log(whatAmI("hello"));
console.log(whatAmI(true));
console.log(whatAmI(0));

/*
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsy!";
}
console.log(isItTruthy(true));
console.log(isItTruthy(1));
console.log(isItTruthy("hello"));
console.log(isItTruthy([]));
console.log(isItTruthy({}));

console.log(isItTruthy(false));
console.log(isItTruthy(0));
console.log(isItTruthy(""));
console.log(isItTruthy(null));
console.log(isItTruthy(undefined));
console.log(isItTruthy(NaN));
