/*
each element in the first row, becomes the head of a new row
if the first row is 4 elements
there will be 4 arrays in the returned matrix

create a new array
iterate over all the arrays
  if array index is 0
    iterate through the zero indexed array 
    for each element, create a new array and place that element in the new array
  else
    iterate over each element
      place each element in the array that corresponds to that elements index
      in the current array.

return the new array
*/

function transpose(matrix) {
  let newArr = [];

  matrix.forEach((array, matrixIndex) => {
    if (matrixIndex === 0) {
      array.forEach(ele => newArr.push([ele]));
    } else {
      array.forEach((ele, arrayIndex) => newArr[arrayIndex].push(ele));
    }
  });

  return newArr;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]