// closures are the functions it retains the memory of function

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let increment = outer();
console.log(increment());
