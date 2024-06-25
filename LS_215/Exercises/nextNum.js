/*
given a list of numbers as strings as shorthand that represent a range
return an array of those full numbers

the shorthand can include ranges
  '-', ':', '..'
the ranges are always inclusive

the numbers are seperated by ','

the range is low to high always increasing.

the next number in the string will always be larger
  to decode the number
    find the next number greater than the last number
      that has the encoded number in it's 1s place (num % 10)

given a string
seperate that string into number (split on the ','s)
create a new array
iterate over the number array.
  if the current element is a range
    find the start number, and incrementlly add all number up to and including
    the last number in the range.
  for every other element in the array find the next number greater than the last
  number in the new array that ends with the current element
  add that new number to the new array
return the new array.

HOW TO FIND NEXT NUMBER
given a current highest number and element
counter = current highest number + 1

until counter last values are equal to the element
  increment the counter by 1
  convert the counter to a string
;

return counter

return the number that is higher than the current highest, and ends with
the current element

EXPANDRANGE
given highest number so far, and our range

create a new range array
split the range into it's numbers

iterate over the range numbers
while the next range number exists
  find the starting number of the range
  find the ending number of the next number of the range

  increment from starting number to the ending number and add each to the new
  array
  set the highest number so far to the ending number the range.
end

return the new range array

*/

function expandRange(highestNum, range) {
  let rangeArr = [];

  highestNum = highestNum ? highestNum : 0;

  range = range.split(/[-:]|\.\./);

  for (let i = 0; i < range.length - 1; i += 1) {
    let start = Number(nextNumber(highestNum, range[i]));
    let end = Number(nextNumber(start, range[i + 1]));

    while (start < end) {
      rangeArr.push(String(start));
      start += 1;
    } 
  
    highestNum = start - 1;
  }

  rangeArr.push(String(Number(rangeArr[rangeArr.length - 1]) + 1));
  return rangeArr;
}

function nextNumber(highestNum, shortNum) {
  let counter = Number(highestNum) + 1;
  shortNum = String(shortNum);

  while (String(counter).slice(-shortNum.length) !== shortNum) {
    counter += 1;
  }

  return String(counter)
}

function fullNumbers(string) {
  let numArray = string.split(', ');
  let allNums = [];

  numArray.forEach((num, id) => {
    if (num.match(/[-:]|\.\./)) {
      allNums.push(expandRange(allNums.slice(-1)[0], num))
      allNums = allNums.flat()
    } else {
       allNums.push(nextNumber(allNums.slice(-1), num));
    }
  });

  return allNums.join(', ');
}

console.log(fullNumbers("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
console.log(fullNumbers("104-2")); // 104, 105, 106, 107,...112
console.log(fullNumbers("1-3, 1-2")) // --> 1, 2, 3, 11, 12 ))

console.log(fullNumbers("1, 2, 3, 1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(fullNumbers("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(fullNumbers("104-02")); // --> 104, 105, ... 202 
console.log(fullNumbers("545, 64:11")) // --> 545, 564, 565, .. 611
console.log(fullNumbers("545, 64..11")) // --> 545, 564, 565, .. 611
