const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// todo - soluzione

// const evenNums = nums.filter((num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(evenNums);
// console.log(nums);

// # forma compatta

const evenNums = nums.filter((num) => num % 2 === 0);

console.log(evenNums);
console.log(nums);
