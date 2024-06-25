/*
given an odd number 7 or greater, log an 8 pointed star
to the console.

star is in a num x num grid.

star(7)

line 1 = *  *  *
line 2 =  * * *
line 3 =   ***
line 4 = *******
line 5-7 are mirrored 1-3

each line has a star in the center
each line has a star on the outer sides of the line and then
center line is all stars

so if we generate all the lines up to the middle line (num / 2 floor)
make a line that is all stars the length of the num
and mirror the first half

starting num wide and going down to 3 wide
subtracting 2 from the overall star width each time

set width to num
create a string width wide filled with empty spaces
put a star on the first and last spots of the string
place a star on (num / 2).floor index

iterate from num down to 3
  each iterationg build a new string and add it to the array
  deincrment width by 2

take the array and add a num-width string of stars to it

flip and concat the array (sans the last ele) to itself

print each element


*/
let star = num => {
  let starArr = [];
  let padding = num;

  for(let width = num; width >= 3; width -= 2) {
    let row = Array(width).fill(' ');
    let center = Math.floor(width / 2);

    row[0] = '*';
    row[row.length - 1] = '*';
    row[center] = '*'

    starArr.push(row.join('').padStart(padding));
    padding -= 1;
  }

  starArr = starArr.concat('*'.repeat(num), starArr.toReversed());

  starArr.forEach(row => console.log(row));
}
star(9);
// logs
//*   *   *- 9
// *  *  * - 7 wide
//  * * *  - 5 wide
//   ***   - 3 wide
// *******
//   ***
//  * * *
// *  *  *