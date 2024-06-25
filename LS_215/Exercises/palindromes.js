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

function palindromes(string) {
  let allSubstrings = substrings(string);

  return allSubstrings.filter(str => {
    return str.length > 1 && str === str.split('').reverse().join('')
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]