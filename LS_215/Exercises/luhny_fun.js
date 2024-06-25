/*
2323 becomes
4343 summed = 14

2005 becomes
4005 summed = 9

7766 becomes
5736 summed = 21

3554 becomes
6514 summed = 16

Total sum = 60

Given a string, return true if the given digits in the string are valid per the
Luhn formula. Return false otherwise

Ignore all non-numeric characters.
if there are no numeric characters return false.

starting from the second to rightmost character. Double the value of that number
and every other number to the beginning of the string.

If a doubled number is greater than or equal to 10. subtract 9 from that number

If the sum of all the digits after doubling ends with a 0. It is a valid Luhn
number. If it doesn't end with a 0 it is not valid.

1234556
 ^ ^ ^

29238 becomes
29268 summed = 27

50298 becomes
50298 summed = 24

53298 becomes
56298 summed = 30

ALGO

given a string
clean all non-digit characters from the string
split the string into individual characters and convert to numbers(array)
starting from the second to last character
  iterate over the array backwards skipping every other element until the start
of the array
    double the number
    if the number is greater than 9
      subtract 9 from that number

sum the digits in the array

if the sum of the digits is (sum % 10 === 0)
  return true, it's a Luhn num.
else return false

1234
12345

if length of num is even start on the first element
if length of num is odd start on the second element


given a number that isn't a valid luhn number, add a digit that will make it
valid.

Need to find the luhn sum offset by 1 so we can add a number
find how far off the sum is from being valid.
  10 - sum % 10 is the new number
  add the number to the end of the string

return the given number


LUHN GENERATOR
given a length for the output
generate a luhn number of the desired length and return it
  until the number length is equal to the given length
    generate the next luhn number in the sequence


*/

function validLuhnNum(string) {
  let nums = string.replaceAll(/\D/g, '').split('').map(char => Number(char));

  for (let i = nums.length - 2; i >= 0; i -= 2) {
    let newNum = nums[i] * 2;

    nums[i] = newNum > 9 ? newNum - 9 : newNum;
  }

  let summedDigits = nums.reduce((acc, ele) => acc + ele);

  return summedDigits % 10 === 0;
}

function generateLuhnChecksum(string) {
  let nums = string.replaceAll(/\D/g, '').split('').map(char => Number(char));

  for (let i = nums.length - 2; i >= 0; i -= 2) {
    let newNum = nums[i] * 2;

    nums[i] = newNum > 9 ? newNum - 9 : newNum;
  }

  return nums.reduce((acc, ele) => acc + ele);
}

function makeLuhnValid(number) {
  luhnSumOffset = generateLuhnChecksum(number + '0');
  let newNum = ''

  if (validLuhnNum(number + '0')) {
    newNum = number + '0';
  } else {
    newNum = number + (10 - (luhnSumOffset % 10));
  }

  return newNum;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generateLuhnNum(length) {
  let num = String(getRandomInt(1, (10**(length - 1))));
  while (num.length < length) {
    num = makeLuhnValid(num)
  }

  console.log(validLuhnNum(num));
  return num;
}

// console.log(generateLuhnNum(3)) // 34
// console.log(generateLuhnNum(3)) // 3491
// console.log(validLuhnNum(generateLuhnNum(2, 10))) // true 
// console.log(validLuhnNum('3491'));

// console.log(generateLuhnNum(8));

let seenLuhnNum = [];

while (true) {
  newLuhn = generateLuhnNum(8);
  if (seenLuhnNum.includes(newLuhn)) {
    console.log(newLuhn);
    console.log(seenLuhnNum.length);
    break;
  } else {
    seenLuhnNum.push(newLuhn);
  }
}

// console.log(makeLuhnValid('2323 2005 7766 355')); // valid luhn 2323 2005 7766 3554
// console.log(makeLuhnValid('1234')); //  12344
// console.log(validLuhnNum('09238')); // false (final num is 27)
// console.log(makeLuhnValid('09238'))
// console.log(validLuhnNum(makeLuhnValid('09238'))); // true

//                         14380 -- 16 % 10 = 6 -- 10 - 6 = 4 
// console.log(validLuhnNum('2323 2005 7766 3554')); // true (final num is 60)
// console.log(validLuhnNum('8763')); // true (final num is 20)
// console.log(validLuhnNum('09238')); // false (final num is 27)
// console.log(validLuhnNum('53298')); // true (final num is 30)

// console.log(validLuhnNum('11--a11six ')); // false (final num is 6)
// console.log(validLuhnNum(' # 2323 20   --05 77alkj66!3#554')); // true (final num is 60)
