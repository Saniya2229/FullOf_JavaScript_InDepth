// Generator function doesn't execute things at onens actually create things in resume bases.

function* generateNumber() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generateNumber();
let genTwo = generateNumber();

console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
