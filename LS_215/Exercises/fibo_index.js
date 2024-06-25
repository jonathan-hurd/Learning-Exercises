/*
Given a number greater than 1
return the index of the first fibonacci number that has that number
of digits

the first fibonacci number is index 1

starting with the first 2 numbers of the fibonacci sequence 1 and 1

create an index starting at 2

begin calculating each successive fibonacci number in the sequence
  on each number, convert that number to a string and check the length.
  if the number's length is equal to or greater than the given number
  return the current index
  increment the index

first_num
second_num
fibonacci returns 3rd num (current)
  do the checks
second_num is saved as first_num
3rd num is saved as second_num

fibonacci takes 2 numbers and returns 2 numbers,
fibo(1, 1) => (1, 2)
fibo(1, 2) => (2, 3)
fibo(2, 3) => (3, 5)


*/

function fibo(num1, num2) {
  return [num2, num1 + num2];
}


function findFibonacciIndexByLength(targetLength) {
  let fiboSequence = [1n, 1n];
  let fiboIndex = 2n;

  while (String(fiboSequence[1]).length < targetLength) {
    fiboSequence = fibo(...fiboSequence);
    fiboIndex += 1n;
  }

  return fiboIndex;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.