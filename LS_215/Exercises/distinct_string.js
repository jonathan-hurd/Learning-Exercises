/*
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

distinct only occurs once in an array
given an integer return the integer distinct string present
  based on appearance from start of array.

Does case matter?

do we need to account for non-strings in our array?
  if so, how do we compare them? 
    is 3 equal to '3' not equal

what to return the integer given is outside the range for the amount of distinct
strings - undefined

we need count an item that we encounter, or we need to keep of list of seen
items

given an array and integer
filter the array keeping only those elements that are unique
  unique means they only occur once in the array

if the given integer is less than filtered array length
  return the filtered array element at integer
else 
  return undefined

Uniq FUNCTION
  given an element and an array
  return if the element only occurs once

  counter = 0
  iterate over the array
    increment the counter for each matching element

  return the counter === 1
*/

function distinctString(array, int) {
  let uniqElements = array.filter(ele => unique(ele, array));

  if (int <= uniqElements.length) {
    return uniqElements[int - 1];
  } else {
    return '';
  }
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","b","c", "D", "b","c","a"], 1)); // "d"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // undefined

// console.log(unique('d', ["d","b","c","b","c","a"])) // true
// console.log(unique('b', ["d","b","c","b","c","a"])) // false
// console.log(unique('z', ["d","b","c","b","c","a"])) // false

function unique(ele, array) {
  let counter = 0;

  array.forEach(arrayEle => {
    if (arrayEle === ele) {
      counter += 1;
    }
  })

  return counter === 1;
}


