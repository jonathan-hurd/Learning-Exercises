/*
given a number
return the next featured number greater than it

a feature number is:
odd number
multiple of 7
with each digit being unique
largest possible featured number is 9876543201

given a number
find the next multiple of 7 that is odd
  add 1 to it
  while number is a !multiple of seven and not odd
    increment the number

while number is less than highest possible
  check if all the digits are unique
    convert to a string
    iterate over each of the characters, if the current character has
    more than 1 in the string, it's not unique

  if yes, return it
  if no add 14 to the number and check if it's unique

*/

function featured(num) {
  const HIGHEST_POSSIBLE = 9876543201;

  do { 
    num += 1;
  } while (num % 7 !== 0 || num % 2 === 0)

  while (num <= HIGHEST_POSSIBLE) {
    if (uniqDigits(num)) {
      return num;
    }

    num += 14
  }

  return 'There is no possible number that fulfills those requirements.'
}

function uniqDigits(num) {
  num = String(num); 

  for(let i = 0; i < num.length; i += 1) {
    let regex = new RegExp(num[i], 'g');

    if (num.match(regex).length > 1) {
      return false;
    }
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");