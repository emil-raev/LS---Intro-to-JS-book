//8.
function isNAN(num) {
  return !(num === num);
}

//9.
function isMinusZero(num) {
  return 1 / num === -Infinity;
}