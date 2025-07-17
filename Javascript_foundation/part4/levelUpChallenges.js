import { log } from "three/src/nodes/TSL.js";

let teas = ["green tea", "black tea", "chai", "oolang tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

let cities = ["London", "New York", "Paris", "Barlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4 || num === "4") {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

let newTeas = ["chai", "green tea", "harbal tea", "black tea"];
let preferredteas = [];

for (const tea of newTeas) {
  if (tea === "harbal tea") {
    continue;
  }
  preferredteas.push(tea);
}
// console.log(preferredteas);

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  paris: 2200000,
};

let cityNewPopulation = {};
for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);

let worldcities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const city in worldcities) {
  if (worldcities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldcities[city];
}
// console.log(largeCities);

let anothertea = ["earl grey", "green tea", "chai", "oolang tea"];
let availableTea = [];

anothertea.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTea.push(tea);
});

// console.log(availableTea);

let cityCollection = ["Berlin", "Tokyo", "Sydeny", "Paris"];
let traveledCities = [];

cityCollection.forEach((city) => {
  if (city === "Sydeny") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

let myArr = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] === 7) {
    continue;
  }
  doubledNumbers.push(myArr[i] * 2);
}
// console.log(doubledNumbers);

let anotherNewTeaCollection = [
  "chai",
  "green tea",
  "black tea",
  "jasmin tea",
  "herbal tea",
];
let shortteas = [];

for (const tea of anotherNewTeaCollection) {
  if (tea.length > 10) {
    break;
  }
  shortteas.push(tea);
}
// console.log(shortteas);

/* Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumOfN(5));

/*
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
*/
function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}
console.log(printMultiplicationTable(2));

/*
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("AEIOU"));
console.log(countVowels("Javascript"));

/*Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()*/

const person = {
  name: "Hitesh",
  age: 19.5,

  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};
console.log(person.introduce());

function outer() {
  function inner() {
    return `Inner function called`;
  }
  return inner();
}
console.log(outer());
