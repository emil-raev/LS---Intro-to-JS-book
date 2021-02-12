
2.
```
funcation evenOrOdd (num) {
  if (num % 2) {
    console.log('odd');
  } else {
    console.log('even');
  }
}
```
3.
```
funcation evenOrOdd (num) {
  if (!Number.isInteger(num)) {
    console.log('Error');
    return;
  }
  if (num % 2) {
    console.log('odd');
  } else {
    console.log('even');
  }
}
```
7.
**node REPL**
```
function toCaps(string){
  return string.length > 10 ? string.toUpperCase() : string;
}
```
8.
```
function range(number){
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number < 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number < 0) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
```
