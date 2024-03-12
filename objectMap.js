const club = new Map();
club.set("Vasco", { libertadoresChampion: true });
club.set("São Paulo", { libertadoresChampion: true });
club.set("Botafogo", { libertadoresChampion: false });
club.set("Gremio", { libertadoresChampion: true });
club.set("Sport", { libertadoresChampion: false });

console.log(club.get("Vasco"));

club.forEach((value, key) => {
  console.log(key, value);
});

console.log(club.has("Vasco"));
console.log(club.has("Sport"));
club.delete("Sport");
console.log(club.has("Sport"));
console.log(club.size);
console.log(club);
