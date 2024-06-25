function isBalanced(string) {
  let balance = 0;
  
  let chars = string.split('');
  for( let i = 0; i < string.length; i += 1) {
    if (chars[i] === '(') {
      balance += 1;
    } else if (chars[i] === ')') {
      balance -= 1;
    } else {
      continue;
    }

    if (balance < 0) {
      return false
    }
  }

  return balance === 0;
}

/*

  only need one number:
    if num is ever negative return false

    at the end of the string check if it's zero

  open 0 and closed 0 are balanced
  increment open and closed each time you see a ( or )

  if closed is ever greater than open
    return false

  otherwise go to the end of the string and then compare the two values
*/

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false