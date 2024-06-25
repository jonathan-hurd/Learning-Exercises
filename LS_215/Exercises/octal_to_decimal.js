function octalToDecimal(numberString) {
  return numberString.split('').reverse().reduce((accum, num, power) => {
    return accum + num * (8 ** power);
   }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

/*
Given a string that represents an octal number
convert that string to a decimal number and return it.

create a sum variable
iterate over the string from the 1s place.
for each successive iteration multiple the current number by 8^iteration count
  add that number to the sum
return the sum after the iterations are complete.
*/