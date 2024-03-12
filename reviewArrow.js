// Arrow functions
const add = (x, y) => x + y;
console.log(add(2, 3));

const lexicalScope = () => console.log(this === module.exports);
const lexicalScopeTwo = lexicalScope.bind({});
lexicalScope();
lexicalScopeTwo();

// Parameters Default
function multiply(x = 1, y = 2) {
  console.log(x * y);
}
multiply();

// Rest parameters
function sub(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum -= args[i];
  }
  return sum;
}
console.log(sub(1, 2, 3, 4, 5));

// Spread operator
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));


