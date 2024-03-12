// Operetors Rest (join) and Spread (spread)
// Rest operator use in parameters of functions
// Spread operator use with objects and arrays

// Spread operator in objects
const car = { model: "Ford", color: "Red" };
const clone = { ...car };
console.log(clone);

// Spread operator in arrays
const cars = ["Renegade", "Ford", "Chevrolet", "Toyota"];
const finalGroup = [
  "Mercedes",
  ...cars,
  "Volvo",
  "BMW",
  "Audi",
  "Mazda",
  "Honda",
  "Volkswagen",
  "Renault",
  "Ferrari",
];

console.log(finalGroup);
