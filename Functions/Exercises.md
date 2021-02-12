
2.
```
function getName(question) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(question);
  return name;
}  

let firstName = getName('What is your first name?');
let lastName = getName('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);
```
3.
```
function multiply (a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}  

let firstNumber = getNumber('Enter first number:');
let secondNumber = getNumber('Enter second number:);

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
```


