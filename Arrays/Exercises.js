//3.
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// myArray.forEach(arr => arr.forEach(elem => {
//   if (!(elem % 2)) console.log(elem);
// }));

//4.
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// console.log(myArray.map(elem => (elem % 2) ? 'odd' : 'even'));

//5.
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
// function findIntegers(arr) {
//   return arr.filter(elem => Number.isInteger(elem));
// }

//8.
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]
// function oddLengths(arr) {
//   return arr.reduce((acc, nxt) => {
//     if (nxt.length % 2) acc.push(nxt.length);
//     return acc;
//   }, []);
// }
