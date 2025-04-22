const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// todo - soluzione

const namePeople = people.map((person) => person.name).join(`, `);
console.log(namePeople);
