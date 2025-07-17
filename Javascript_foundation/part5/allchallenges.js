import { set } from "mongoose";

let teaflavors = ["green tea", "black tea", "oolang tea"];
let firstTea = [teaflavors[0]];
// console.log(firstTea);

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}
let mixedArray = [42, "hello", 3.14, true];
// console.log(filterNumbers(mixedArray));

function reverseArray(arr) {
  return arr.reverse();
}
let reverses = [10, 9, 8, 7, 6, 5, 4, 3];
// console.log(reverseArray(reverses));

function findMax(arr) {
  return Math.max(...arr);
}
let largest = [43, 56, 89, 200, 294, 45];
// console.log(findMax(largest));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
let removed = [1, 2, 2, 4, 5, 7, 8, 7, 4, 1];
// console.log(removeDuplicates(removed));

function flattenArray(arr) {
  return arr.flat(Infinity);
}
let flat = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(flat));

const squareNumbers = (arr) => {
  return arr.map((num) => num * num);
};
// console.log(squareNumbers([1, 2, 3]));

const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
// console.log(filterEvenNumbers([-1, -2, 4, 2, -6]));
