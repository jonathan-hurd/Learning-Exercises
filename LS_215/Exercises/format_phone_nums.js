/*
Write a program that cleans user-entered phone numbers.
given a string with numbers and various characters in it
return a 10 digit number with extraneous characters removed.
I'm assuming that there will not be other characters not in the extra characters
list

should the return be a number or a string?

Numbers may have a combination of spaces, dashes dots and parentheses that should
all be removed from the input and return

if a number is not formatted correctly return '0000000000'

If the phone number is less than 10 digits it's not formatted right
If the number is 10 digits assume it is good
If the number is 11 digits and first number is 1 trim the 1 and use the remaining 10
If the number is 11 digits and first number is not 1 it's not formatted right
If more than 11 digits it's not formatted right

given a string
remove all extraneous characters from it
  '[-.() ]'
if string length is less than 10 or greater than 11 return invalid number
if string is 10 return it
if string is 11 with a leading 1 strip the leading 1 and return the number
if the string is 11 without a leading 1 return invalid number
*/

function formatPhoneNumber(number) {
  const invalidNum = '0000000000';

  let formattedNum = number.replaceAll(/[-.() ]/g, '');

  if (formattedNum.length === 10) {
    return formattedNum;
  } else if (formattedNum.length === 11 && formattedNum[0] === '1') {
    return formattedNum.slice(1)
  }

  return invalidNum;
}

console.log(formatPhoneNumber('123456789')) // 0000000000 less than 10
console.log(formatPhoneNumber('1234567899')) // 1234567899 10
console.log(formatPhoneNumber('11234567890')) // 1234567890 11 with leading 1
console.log(formatPhoneNumber('012345678909')) // 0000000000 11 with leading not 1

console.log(formatPhoneNumber('1-(234))567. 89')) // 0000000000 less than 10 with chars
console.log(formatPhoneNumber('1-234(567))  899')) // 1234567899 10 with chars
console.log(formatPhoneNumber('1 (123)456..78-9 9')) // 1234567899 11 with leading 1 with chars
console.log(formatPhoneNumber('01234((56..78--9  09')) // 0000000000 11 with leading not 1 with chars


