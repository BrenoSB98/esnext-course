// Variables let and var
// Nowadays the variables var is little used.
{
  var x = 10;
  let y = 20;
  console.log(y);
}
console.log(x);
let y = 20;
// In template string we use backtick (``) to denote a string literal.
const product = `The product of ${x} and ${y} is ${x * y}`;
console.log(product);

// Destructuring variables
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const [l, e, ...rest] = "Vasco da Gama";
console.log(l, e, rest);

const [d, , f] = [1, 2, 3];
console.log(d, f);

const {name: person, age} = {name: "John", age: 20};
console.log(person, age);
