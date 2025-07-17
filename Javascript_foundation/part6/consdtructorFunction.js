import { mod } from "three/tsl";

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

// this keyword is refering to the newly created object.

function Tea(type) {
  this.type = type;
  this.describe = () => {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon Tea");
// console.log(lemonTea.describe());

// constructor function

// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
// let coffee = Drink("Cofee");

// challenges

function Animal() {}

Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return `woof!`;
};

Dog.prototype.constructor = Dog;

const myDog = new Dog("Max", "Beagle");

// console.log(myDog.name);
// console.log(myDog.breed);
// console.log(myDog.speak());
// console.log(myDog.bark());

// console.log(myDog instanceof Dog);
// console.log(myDog instanceof Animal);


function Person(name, age){
  if(typeof age != 'number' || age <= 0) {
    throw new Error("Age must be a positive number");
    
  }
  this.name = name;
  this.age = age;

  this.greet() = function (){
    return `Hello, my name is ${this.name}`
  }

}
try{
let p1 = new Person("Alice", 20)
console.log(p1.greet());
let p2 = new Person("Bob", -5)

}catch(error){
console.error('Error:', error.message)
}


