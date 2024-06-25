/*
Write a function that compares version numbers
Return 1 if version1 is greater than version 2
Return -1 if version1 is less than version 2
Return 0 if versions are equal.

Versions are sub-versioned by seperating with a '.'
function should handle numerical/string inputs

1.2.2.1 compared to
1.2.2.2
^ compare these first, they are equal so
  ^ compare these next, they are equal so
    ^ comapre these next, they are eqaul so
      ^ compare these, not equal so version 1 is less

1.2.0
1.2
^ equal
  ^ equal
    ^ trailing zeros can be ignored so versions are equal

1.2.0.1
1.2
    ^ zero is not trailing so we need to look until the end
      ^ we find a 1. So version1 is greater

1.2.0.1
1.2.1
    ^ 1 is greater than 0 so we can stop, version2 is greater

numbers/strings input: convert to string and split numbers on '.'
map array to numbers to compare each element of the array
add 0 elements to the shorter array until the arrays are equal length

if any element is greater than the other, short circuit and return appropriate value
    num 1 > num 2 == true then version 1 is greater
    if num 1 === num 2 then versions are equal to this point
    else version 2 is greater
if reach end and all equal return 0 
*/

console.log(compareVersions(0.1, 1)) // -1
console.log(compareVersions('1.18.2', '1.2.2.0')) // 1
console.log(compareVersions(13.0, '1.5.0')) // 1
console.log(compareVersions('1.2.0', 1.2)) // 0
console.log(compareVersions('1.2.0.1', '1.2.1')) // -1
console.log(compareVersions('1.2.0.1', 1.2)) // 1

function compareVersions(version1, version2) {
  let ver1 = String(version1).split('.').map(num => Number(num));
  let ver2 = String(version2).split('.').map(num => Number(num));

  while (ver1.length !== ver2.length) {
    if (ver1.length < ver2.length) {
      ver1.push(0);
    } else {
      ver2.push(0)
    }
  }

  for (let i = 0; i < ver1.length; i += 1) {
    if (ver1[i] > ver2[i]) {
      return 1;
    } else if (ver1[i] < ver2[i]) {
      return -1;
    }
  }

  return 0;
}