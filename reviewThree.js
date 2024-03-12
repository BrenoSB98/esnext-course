// ES6: Object.values() and Object.entries()
const person = {
  name: "Breno",
  age: 25,
  weight: 100,
  height: 1.8,
};
console.log(Object.values(person));
console.log(Object.entries(person));

const name = "Vasco da Gama";
const club = {
  name,
  printClub: () => name,
};
console.log(club.name, club.printClub());
