/*
given an odd number
output a diamond to the screen that is contained in a grid
that is the size of the odd number

given 3
first row is ' * '
sec row is   '***'
3rd row is   ' * '

given 5
1st rows is '  *  ' a single star centered in the given number length empty str
2nd         ' *** ' + 2 more stars than previous center numbers length
3rd         '*****' when at the center row (3) stars all the way across
4th         ' *** ' 4th and 5th rows are mirrored versions of
5th         '  *  '

find the left and right centers

num / 2 floor
5 / 2 = 2

from 1 upto and including the half + 1 (3)

create an asterisk string
create a string padded on the left and right 2 and 2
add that to array

add 2 to the asterisk string

subtract 1 from the padding left and padding right

create an asterisk string
add it to array

add 2 to the asterisk string
add it to array

take the array except the last element and reverse and concentate it to the 
end of the array

print each string in the array.

padding = 3
stars = '*'
from 1 upto padding plus 1 (4)
  padding + * + padding >> array
  stars = stars + 2
  padding -= 1

['   *   ', 
'  ***  ', 
' ***** ', 
'*******']
*/

function diamonds(n) {
  let padding = Math.floor(n / 2);
  let stars = '*';
  let diamond = [];
  
  for(let i = 0; i <= Math.floor(n / 2); i += 1) {
    let padStr = ' '.repeat(padding);

    diamond.push(padStr + hollowStr(stars) + padStr);
    stars += '**';
    padding -= 1;
  }

  diamond = diamond.concat(diamond.slice(0, -1).reverse());

  diamond.forEach(row => console.log(row));
}

function hollowStr(string) {
  if (string.length < 3) {
    return string;
  }

  return string[0] + ' '.repeat(string.length - 2) + string.slice(-1);
}

diamonds(7);
diamonds(5);
diamonds(11)