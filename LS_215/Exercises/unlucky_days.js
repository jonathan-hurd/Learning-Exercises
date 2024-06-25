/*
given a year
find all friday the 13ths that occur in that year

for each of the days in that year
  get the date .getdate()
  get the day of the week .getDay() === 5 is friday

  if they are 13 and friday

year.setDate(year.getDate() + 1)

increment the counter

given a year 
create a new date object for that year
declare a variable counter = 0

while the year is the given year
  check if the day is friday the 13th
    if yes increment counter
  set year day to the next day

return the counter

*/
function fridayThe13ths(year) {
  let date = new Date(year, 0, 1);
  let unluckyDays = 0;

  new Date(1983, )
  while (date.getFullYear() === year) {
    if (date.getDate() === 13 && date.getDay() === 5) {
      unluckyDays += 1;
    }

    date.setDate(date.getDate() + 1);
  }

  return unluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2