const club = new Set();

club.add("Vasco da Gama");
club.add("São Paulo").add("Real Madrid").add("Botafogo");

console.log(club.has("Vasco da Gama"));
club.add("Vasco da Gama");
console.log(club);
