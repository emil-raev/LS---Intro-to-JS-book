//1.
// let rlSync = require('readline-sync');
// let age = Number(rlSync.question('What is your age?'));
// for (let span = 10; span <= 40; span += 10) {
//   console.log(`In ${span} years, your age will be ${age + span} years`);
// }

//2.
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(3));

//6.
function factorial(n) {

  return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(3));