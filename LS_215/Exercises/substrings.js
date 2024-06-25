function substrings(string) {
  return string.split('').reduce((newArr, _letter, index) => {
    return newArr.concat(leadingSubstrings(string.slice(index)));
  }, []);
}

let leadingSubstrings = (string) => {
  return string.split('').reduce((newArr, _letter, index, arr) => {
    newArr.push(arr.slice(0, index + 1).join(''));
    return newArr;
  }, []);
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]