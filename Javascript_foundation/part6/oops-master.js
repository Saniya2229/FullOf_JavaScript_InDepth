import { mod } from "three/tsl";

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let Lily = new Person("Lily", 20);
// console.log(Lily.name);

// prototyple chaion

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = () => {
  return `${this.type} makes a sound`;
};

Array.prototype.Lily = function () {
  return `Custom method ${this}`;
};

let myArr = [1, 2, 3];
// console.log(myArr.Lily());

let myNewArr = [4, 5, 6];
// console.log(myNewArr.Lily());

class Flower {
  constructor(type, species) {
    this.type = type;
    this.species = species;
  }

  start() {
    return `${this.type} of this ${this.species}`;
  }
}

class flowerType extends Flower {
  type() {
    return `${this.type} : This is an inheritance example`;
  }
}

let myFlower = new flowerType("show", "smell");
// console.log(myFlower.start());
// console.log(myFlower.type());

// Encapsulation: restring to direct access from data object

// class BankAccount {
//   #balnce = 0;

//   deposite(amount) {
//     this.#balnce += amount;
//     return this.#balnce;
//   }

//   getBalance() {
//     return `$ ${this.#balnce}`;
//   }
// }
// let accouunt = new BankAccount();
// console.log(accouunt.getBalance());

// Abstraction: hides the information details

class CofeeMachine {
  start() {
    // call DB
    return `starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing cofee`;
  }

  preeStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `...${msgOne}, ...${msgTwo}`;
  }
}
let mymachine = new CofeeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
// console.log(mymachine.preeStartButton());

// polymorphism

class Bird {
  fly() {
    return `Flying....`;
  }
}
class Pengiun extends Bird {
  fly() {
    return `penguins can't fly`;
  }
}

let bird = new Bird();
let penguins = new Pengiun();
// console.log(bird.fly());
// console.log(penguins.fly());

// static method
/*
static are special method which can only called by the class itself nobody else called it.
*/

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
let minCalc = new Calculator();
// console.log(minCalc.add(2, 3)); //minCalc.add is not a function

// getters and setters

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Lily", 50000);
// console.log(emp._salary);

// challenges

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDeatails() {
    return `Make: ${this.make} Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }
  startEngine() {
    return `Engine started`;
  }
  move() {
    return "The car is driving";
  }
}

const vehicle1 = new Vehicle("Tata", "SUV");
// console.log(vehicle1.getDeatails());
// console.log(vehicle1.move());

const car1 = new Car("Toyota", "corolla");
// console.log(car1.getDeatails());
// console.log(car1.startEngine());
// console.log(car1.move());

// console.log(Vehicle.isVehicle(vehicle1));
// console.log(Vehicle.isVehicle(car1));

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.log("insufficient balance or Invalid amount.");
    }
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (value >= 0) {
      return this._balance;
    } else {
      console.log("Balance cannot be negative");
    }
  }
}

const acc = new BankAccount(500);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.balance);

acc.balance = -100;
console.log(acc.balance);

class Shape {
  area() {
    return 0; // Default implementation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()];

shapes.forEach((shape, i) => {
  console.log(`Shape ${i + 1} area: ${shape.area().toFixed(2)}`);
});
