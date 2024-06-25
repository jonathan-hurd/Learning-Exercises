let leadingSubstrings = (string) => {
  return string.split('').reduce((newArr, _letter, index, arr) => {
    newArr.push(arr.slice(0, index + 1).join(''));
    return newArr;
  }, []);

  // let substringArr = [];

  // for (let i = 1; i <= string.length; i += 1) {
  //   substringArr.push(string.slice(0, i));
  // }

  // return substringArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]