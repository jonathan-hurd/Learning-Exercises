console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(string) {
  let count = 0;

  return string.split('').map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      count += 1
      if (count % 2 === 1) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }

    return char;
  }).join('');
}

