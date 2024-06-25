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
*/

function validLuhnNum(string) {
  let nums = string.replaceAll(/\D/g, '').split('').map(char => Number(char));

  for (let i = nums.length - 2; i >= 0; i -= 2) {
    let newNum = nums[i] * 2;

    nums[i] = newNum > 9 ? newNum - 9 : newNum;
  }

  let summedDigits = nums.reduce((acc, ele) => acc + ele);
  console.log(summedDigits)

  return summedDigits % 10 === 0;
}

console.log(validLuhnNum('2323 2005 7766 355')); // true (final num is 60)
console.log(validLuhnNum('1111')); // false (final num is 6)
console.log(validLuhnNum('8763')); // true (final num is 20)
console.log(validLuhnNum('09238')); // false (final num is 27)
console.log(validLuhnNum('53298')); // true (final num is 30)

console.log(validLuhnNum('11--a11six ')); // false (final num is 6)
console.log(validLuhnNum(' # 2323 20   --05 77alkj66!3#554')); // true (final num is 60)
