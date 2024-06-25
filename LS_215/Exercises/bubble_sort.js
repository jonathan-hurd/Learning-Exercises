/*
given an arry of at least 2 elements
bubble sort them and return the mutated array

bubble iterates over an array and compares each successive pair of elements
swaps them if they need swapping
continues iterating over the array until no swaps are made in a complete pass


do  
  swapFlag = false;
  iterate over each pair of elements in the array
  if ele1 is greater than ele2
    swap the elements
    swapFlag = true

do this ^^ while swapFlag = true

return the array

1, 2, 4, 6, 7
*/

function bubbleSort(arr) {
  let swapFlag;
  do {
    swapFlag = false;
    for(let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
        swapFlag = true;
      }
    }
  } while (swapFlag)

  return arr;
}

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]