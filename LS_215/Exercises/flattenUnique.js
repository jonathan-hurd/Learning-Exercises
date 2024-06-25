/*
Write a function that takes a two-dimensional array as the argument 
and turns it into a flat array with all duplicated elements removed. 
Treat numbers and number strings (e.g., 1 and '1') as duplicates, 
and keep the one that comes first in the result.

given an array of arrays
return a flattened array with all duplicated elements removed

numbers and number strings are considered duplicates
  keep the element the appears first

3 = '3'
'15' = 15
'0' = 0
0 != ''



given an array of arrays
flatten the arrays

create a seen array []

filter each element of the array
if the current element to string is in the new array
  return false
if the current element to string is not in the new array
  Add that element converted to a string to the new array
  return true

return the filtered/flattened array

*/

function flattenAndUnique(arr) {
  let flatArr = arr.flat();
  let seenArr = [];

  return flatArr.filter(ele => {
    if (seenArr.includes(String(ele))) {
      return false;
    } else {
      seenArr.push(String(ele));
      return true
    }
  });
}

console.log(flattenAndUnique([[]])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, 3, 0], ['', '3', 4, 5, 'a']])); // [1, 2, 3, 0, '', 4, 5, 'a']
