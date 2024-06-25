/*
given a number, max rotate it, max rotation is rotating the whole number.
then fixing the first digit, rotating the slice. 
fixing the second digit, rotating the slice
and so on until

maxRotation(735291);          // 321579
1st rotation = 352917
        freeze ^
2nd rotation = 329175
        freeze ^^
3rd rotation = 321759
        freeze ^^^
rth rotation = 321597
        freeze ^^^^
5th rotation = 321579
        freeze ^^^^^

given a digit, convert it to a string
set rotation amount equal to the string length

loop until the rotation amount is less than 2
  string digit is equal to rotating by the string digit the rotation amount 
  deincrement rotation amount

return string converted to digit
*/

function maxRotation(digit) {
  str = digit.toString();
  rotationAmount = str.length;

  while (rotationAmount > 1) {
    str = rotateRightmostDigits(str, rotationAmount);
    rotationAmount -= 1;
  }

  return Number(str);
}

function rotateRightmostDigits(digits, rotationAmount) {
  let str = digits.toString()
  let rotationPoint = str.length - rotationAmount;
  let rotatedSlice = rotateString(str.slice(rotationPoint))

  return Number(str.slice(0, rotationPoint).concat(rotatedSlice));
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

console.log(maxRotation(735291) === 321579);          // 321579
console.log(maxRotation(3) === 3);               // 3
console.log(maxRotation(35) === 53);              // 53
console.log(maxRotation(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845