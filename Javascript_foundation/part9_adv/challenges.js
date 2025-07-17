/*
Task 1: Simulating Asynchronous Behavior
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
Use setTimeout to simulate this behaviour.
*/

// function simulateAsyncTask() {
//   console.log("Task started");

//   setTimeout(() => {
//     console.log("Task finished");
//   }, 2000);
// }

// simulateAsyncTask();

/*
Task 2: Simulate Multiple Async Tasks with Different Delays
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
*/

// function simulateMultipleTasks() {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("Task 1 finished");
//     }, 1000);
//     setTimeout(() => {
//       console.log("Task 2 finished");
//     }, 2000);
//     setTimeout(() => {
//       console.log("Task 3 finished");
//     }, 3000);
//   });
// }

// simulateMultipleTasks()
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//   });

/*
  Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
  */

// function fetchDataWithCallback(callback) {
//   setTimeout(() => {
//     const data = "Fetched data";
//     callback(data);
//   }, 2000);
// }

// fetchDataWithCallback((result) => {
//   console.log(result);
// });

/*Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.*/

function createCounter() {
  let counter = 0;
  return function increments() {
    counter++;
    return counter;
  };
}

let increment = createCounter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

/*
Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
*/

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

function sayHello(name) {
  return `Hello ${name}`;
}

const limitHello = rateLimiter(sayHello, 3000);

// console.log(limitHello("Alice"));
// console.log(limitHello("Bob"));

setTimeout(() => {
  //   console.log(limitHello("charli"));
}, 3100);

/*
Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.
*/

function memoize(fn) {
  const cache = {};

  return function (x) {
    if (x in cache) {
      return cache[x];
    } else {
      const result = fn(x);
      cache[x] = result;
      return result;
    }
  };
}

function square(n) {
  //   console.log("Calculating...");
  return n * n;
}

const memoizedSquare = memoize(square);

// console.log(memoizedSquare(4));
// console.log(memoizedSquare(4));
