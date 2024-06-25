console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(string) {
  return string.split('').map(char => toggleCase(char)).join('')
}

function toggleCase(char) {
  if (char.match(/[a-z]/)) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}

