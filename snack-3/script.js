const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// todo - soluzione

// const addNumbers = numbers.map((number) => {
//   number += 1;
//   return number;
// });

// console.log(addNumbers);

// # FORMA COMPATTA

const addNumbers = numbers.map((number) => (number += 1));

console.log(addNumbers);
