import { log } from "three/tsl";

/*
1. calculate sum of all numbers from 1 to 5 
*/
let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

/*
2. write a while loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`
*/

let countdown = [];
let arr = 5;

while (arr > 0) {
  countdown.push(arr);
  arr--;
}
// console.log(countdown);

/*
write a do while loop that prompts a user to enter stop
 stores wach te type in an arrat named teaCollections
*/

// let teaCollections = [];
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea(type "stop"to finish)`);
//   if (tea !== "stop") {
//     teaCollections.push(tea);
//   }
// } while (tea !== "stop");

/*
write a do while loop that adds numbers from 1 to 3 and the result in a variable named `total`
*/

let total = 0;
let num = 1;
let takeNumber;

do {
  total += num;
  num++;
} while (num <= 3);

let multipliedNumbers = [];
let numbers = [2, 4, 6];
let citiList;

for (i = 0; i < numbers.length; i++) {
  //   takeNumber = numbers[i] * 2;
  //   multipliedNumbers.push(takeNumber);
}
// console.log(multipliedNumbers);

let cities = [];
let citiArr = ["Paris", "New York", "tokyo", "London"];

for (i = 0; i < citiArr.length; i++) {
  citiList = citiArr[i];
  cities.push(citiList);
}
console.log(cities);
