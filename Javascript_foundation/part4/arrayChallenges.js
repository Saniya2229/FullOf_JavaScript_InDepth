/*
1. Declare an array named `teaflavors` that cpntains the strings `"green tea"', `"black tea"' and `"oolang tea"`.

 Access the first element of the array and store it in a variablenamed 'firstTea'.
*/

const teaflavors = ["green tea", "black tea", "oolang tea"];

const firstTea = teaflavors[0];

// 2.

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[2];

/*
3. You have an array named `teaTypes' containing `"herbal tea"` , `"white tea"`, and `"masala chai"`.
    change the econd element of the array to `"jasmine tea"`
*/

const teaTypes = ["herbal tea", "white tea", "masala chai"];

const changeArr = (teaTypes[2] = "jasmine tea");
// console.log(changeArr);

// 4.
let citiesVisisted = ["Mumbai", "sydney"];
citiesVisisted.push("Berlin");
// console.log(citiesVisisted);

// 5.
const teaOrders = ["chai", "ice tea", "matcha", "earl gray"];
const lastOrder = teaOrders.pop();
// console.log(lastOrder);
// console.log(teaOrders);

// 6. creat a soft copy of array
const popularteas = ["green tea", "oolang tea", "chai"];
const softCopyTeas = popularteas;
// console.log(softCopyTeas);

// 7. create a hard copies
const topCities = ["berlin", "Singapore", "New York"];
const hardCopyCities = [...topCities];
// const hardCopyCities = topCities.slice()
topCities.pop();
// console.log(hardCopyCities);

// 8. merging the array
const europeanCities = ["paris", "rome"];
const asianCities = ["Tokyo", "bangkok"];

const worldCities = [...europeanCities, ...asianCities];
// console.log(worldCities);

// 9. find the length

let teaMenu = ["masala tea", "oolang tea", "earl grey"];

let menuLength = teaMenu.length;

// 10.

const cityBucketList = ["Kyoto", "London", "cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
// console.log(isLondonInList);

/*
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}
const mixedArray = [1, "hello", true, 42, null, "100", 3.14, undefined];
// console.log(filterNumbers(mixedArray));

/*
Write a function reverseArray(arr) that reverses the array
*/
function reverseArray(arr) {
  return arr.reverse();
}
const reverses = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(reverseArray(reverses));

/*
Write a function findMax(arr) that returns the largest number in the array
*/
function findMax(arr) {
  return Math.max(...arr);
}
const maxArr = [24, 2, 76, 89, 34, 100, 43];
// console.log(findMax(maxArr));

/*
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const duplicates = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(duplicates));

/*
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
function flattenArray(arr) {
  return arr.flat(Infinity);
}
const flatArr = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(flatArr));

/*
Write a function squareNumbers(arr) using map() and arrow functions
*/

const squareNumbers = (arr) => arr.map((num) => num * num);
console.log(squareNumbers([1, 2, 3, 4, 5]));

/*Create a function filterEvenNumbers(arr) using filter() and arrow functions*/

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

/*
Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
*/

const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumPositiveNumbers([1, -2, 3, 4, -5]));

/*
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
*/
const getNames = (arr) => arr.map((obj) => obj.name);
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 24 },
];
console.log(getNames(people));

/*Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function*/

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

console.log(findLongestWord(["apple", "banana", "grapefruit", "kiwi"]));
