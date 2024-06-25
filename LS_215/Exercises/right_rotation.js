/*
given an digits and rotation number

convert digits to arr

take a slice from the back, the length of the rotation number
  slice from length of the string minus the rotation number
  rotate the slice
  join it with the section of array that was not rotated
    from 0 to the length of the array minus the rotation number

join the array together into a string, then convert to a number
return that number

console.log(rotateRightmostDigits(735291, 3));      // 735912
                                     ^
*/
function rotateRightmostDigits(digits, rotationAmount) {
  let str = digits.toString()
  let rotationPoint = str.length - rotationAmount;
  let rotatedSlice = rotateString(str.slice(rotationPoint))

  return Number(str.slice(0, rotationPoint).concat(rotatedSlice);
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917