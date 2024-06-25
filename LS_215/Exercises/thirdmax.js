/*
Given an array of integers, nums, return the third largest number in the array. 
If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

given an array of integers
return the 3rd largest

if the third largest number does not exist, return the greatest number
if the array is less than 3 length what should I do? return greatest

What if extra arguments are given? 
What if a number is zero?
Is there a possibility of negative numbers
Will the array contain only integers?

largest nums array
[3]
if nums array is less than length 3 number is greater than largest, second largest

three variables
largest undefined, secondLargest undefined, thirdLargest undefined

we iterate through the whole array
if the element is larger than largest or largest is undefined
  set element to largest, largest to secondLargest, and scondLargest to third
else if the element is larger than secondLargest or secondlargest is undefined
  set element to second largest, secondLargest to third largest
else if the element is larger than the thirdLargest or is undefined
  set element to third largest
otherwise go to the next iteration

if thirdLargest
  return thirdLargest
else 
  return largest

*/

function thirdMax(arr) {
  let largest;
  let secondLargest;
  let thirdLargest;

  arr.forEach(num => {
    if (num > largest || largest === undefined) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest || secondLargest === undefined) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest || thirdLargest === undefined) {
      thirdLargest = num;
    }
  });

  if (thirdLargest !== undefined) {
    return thirdLargest;
  } else {
    return largest;
  }
}

let sparseArr = [2, 3, 5];
delete sparseArr[1];

console.log(thirdMax([5, 1, 3, 4])) // 3
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([3, 2, 0])); // 0
console.log(thirdMax([3, 2, -3])); // -3
console.log(thirdMax([2, 1])); // 2
console.log(thirdMax([2, 1, 2, 2])); // 2
console.log(thirdMax(sparseArr)); // 2