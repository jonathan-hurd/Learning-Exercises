/*
given a number

the number of switches we have is equal to that number -

we will iterate that number of times through our bank 
of switches.

the first round through all the switches will be turned on
every successive round will toggle switches based on multiples
of the current round

round 1 toggles all switches that are multiplies of 1 (every switch turns on)
round 2 toggles multiples of 2 (2, 4, 6...)
round 3 toggles multiples of 3 (3, 6, 9...)
round 4 toggles multiples of 4 (4, 8, 12...)
round 5 toggles multiples of 5 (5, 10, 15...)

Return an array of numbers that represent the the switches that are
on after all iterations.

lights could be object with keys numbered and values true or false
depending on if they are on or off

after all the toggling build an array of the keys that have true values

given a number

build an object with key-value pairs from 1 up to and including the given num
{1: false, 2: false...}

iterate from 1 up to and including the given number
on each iteration
toggle the value of each key's value if the key is evenly divisible by the 
current iteration counter.

after iterations are complete
  filter the array of keys based on the keys value, keep if true

return the array

*/

function lightsOn(switches) {
  let bank = {};

  for(let i = 1; i <= switches; i += 1) {
    bank[i] = false;
  }

  for(let i = 1; i <= switches; i += 1) {
    Object.keys(bank).forEach(ele => {
      if (ele % i === 0) {
        bank[ele] = !bank[ele]
      }
    })
  }

  return Object.keys(bank).filter(key => bank[key]).map(key => Number(key));
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]