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
*/
function fibonacci(sequenceNum) {
  if (sequenceNum === 1 || sequenceNum === 2) {
    return 1;
  }

  return (fibonacci(sequenceNum - 1) + fibonacci(sequenceNum - 2));
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765