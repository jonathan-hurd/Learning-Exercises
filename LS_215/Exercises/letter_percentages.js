/*
given a string
return an object with the keys: lowercase, uppercase, neither
with the values of the keys being the percentage of the total string that the
categories make up.

find the percentage by dividing number by total number times 100

given a string

create an object
set object[lowercase] = number of lower case / string length * 100
set object[uppercase] = number of upper case / string length * 100
set object[neither] = number of neither / string length * 100

format the math operations as strings rounded to the 100th
toFixed(2)

return the object

*/

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
//                   uppercase   1        
//                   lowercase 12 345     
//                   neither         1234
//                      10 total:
// 5 / 10 * 100 = 50 lowercase
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }