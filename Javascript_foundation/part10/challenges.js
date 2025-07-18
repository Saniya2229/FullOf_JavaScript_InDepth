/*
Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()
*/

// Constructor for Animal
function Animal() {
  // Animal-specific properties can be added here
}

// Adding method to Animal's prototype
Animal.prototype.makeSound = function () {
  return "Some generic animal sound";
};

// Constructor for Dog
function Dog() {
  Animal.call(this); // Call the Animal constructor
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add bark method to Dog
Dog.prototype.bark = function () {
  return "Woof!";
};

// Example usage
const myDog = new Dog();
// console.log(myDog.makeSound()); // Output: Some generic animal sound
// console.log(myDog.bark()); // Output: Woof!

/*
Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.
Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.
*/

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rect = new Rectangle("blue", 10, 5);

// console.log(rect.getColor());
// console.log(rect.getArea());

/*
Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
*/

const person = {
  name: "Lily",

  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

const boundIntro = person.introduce.bind(person);
// boundIntro();

/*
Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
*/

function introduce(name) {
  console.log("Hi,my name is " + this.name);
}

const person1 = {
  name: "saniya",
};
const person2 = {
  name: "Ayesha",
};
const person3 = {
  name: "Zara",
};

// introduce.call(person1);
// introduce.call(person2);
// introduce.call(person3);

/*
Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
*/

function sum(num1, num2) {
  return (num1 + num2) * this.multiplier;
}

const context1 = {
  multiplier: 2,
};
const context2 = {
  multiplier: 10,
};
const context3 = {
  multiplier: 0.5,
};

// console.log(sum.apply(context1, [5, 3]));
// console.log(sum.apply(context2, [1, 4]));
// console.log(sum.apply(context3, [6, 2]));

/*
Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.
Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
*/

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user data fetched");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    // console.log("Fetching log data...");
    const [userData, postData] = await Promise.all([fetchUser(), fetchPosts()]);

    // console.log(userData);
    // console.log(postData);
  } catch (error) {
    // console.log("Error feching data", error);
  }
}
// fetchAllData();

/*
Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.
Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
*/

function fetchSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data successfully fetched...");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 1000);
  });
}

/*fetchSuccess()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetchFailure()
  .then((data) => {
    console.error(data);
  })
  .catch((error) => {
    console.error(error.message);
  });
*/

async function handlePromise() {
  try {
    const [Success, Failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(Success);
    console.log(Failure);
  } catch (error) {
    console.error(error);
  }
}
// handlePromise();

/*
Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
*/

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Time exceeded");
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

const sampletask = new Promise((resolve) => {
  setTimeout(() => {
    // resolve("Data recieved Successfully!");
  }, 2000);
});

fetchWithTimeout(sampletask, 1500);
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

/*
  Create a generator function numberGenerator() that yields numbers from 1 to 3.
  */

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();

// console.log(gen.next().value);
// console.log(gen.next().value);

/*
Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
Each call to .next() should return the next number in the range until it reaches end.
*/

function rangeIterator(start, end) {
  return {
    next() {
      return start <= end
        ? {
            value: start++,
            done: false,
          }
        : { done: true };
    },
  };
}

const it = rangeIterator(1, 3);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/*
Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

Use the next() method to get the next Fibonacci number.
*/

function* fibonacciGenerator() {
  let a = 1;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
