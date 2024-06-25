/*
given a matrix (array of arrays) that represent a grid
transpose that grid by switching the rows with the columns


  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]

becomes

  [1, 4, 3]
  [5, 7, 9]
  [8, 2 6]

Each row has to be seperated out into new arrays

Processing from the first array, each of the elements needs to be added
to a different array.

we will have the same number of output arrays as input arrays

I'm assuming that the grid will be a square and will work under that assumption

ALGO
map the matrix of arrays (matrix index)
  map each array (array index)
  for each element we access the array index array
  and return the element at the matrix index
we return the mapped array.


*/
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(matrix) {
  return matrix.map(function(array, matrixIndex) {
    return array.map(function(_ele, arrayIndex) {
      return matrix[arrayIndex][matrixIndex];
    });
  });
}
