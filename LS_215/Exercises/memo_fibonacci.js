/*
given a number

find the fibonacci number at the given numbers position in the
fibonacci sequence

use a recursive function

given a number
if given num is 1 or 2 return 1
else call fibonacci with num - 1) and return the sum of that num with 1

a recursive function calls itself at least once
it has end condition
the result of each recursion is in each step

num 5

number isn't 1 or 2

return fibonacci(5 - 2) + fibonacci (5 - 1)
                  2  

fibo(4) 

fibo(3) + fibo (2)

fibo(3)

number isnt' 1 or 2

return fibo(3 - 2) + fibo(3 - 1)

fibo (1)

number is 1 or 2
return 1


1 1 2 3 5 8 13 21

each time we calculate a fibonacci, before we do, check

if it has been seen before use the pre-calculated value
if it hasn't, calculate the value and then store the value
*/

const memo = {};

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    if (memo[nth]) {
      return memo[nth];
    } else {
      memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
      return memo[nth];
    }
  }
}  
  // if (sequenceNum === 1n || sequenceNum === 2n) {
  //   seenFibos[sequenceNum] = 1n;
  //   return 1n;
  // }

  // if (seenFibos[sequenceNum - 2n]) {
  //   return fibonacci(sequenceNum - 1n) + seenFibos[sequenceNum - 2n];
  // }

  // return seenFibos[sequenceNum] = fibonacci(sequenceNum - 1n) + fibonacci(sequenceNum - 2n)




console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144U
console.log(fibonacci(1000));      // 6765