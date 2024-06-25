/*
given a sentence, convert every digit word to the corresponding digit character.

given a string
split the string into words
Map the words array

if the current word is contained in the keys for the words object. swap it with
the value of the key

join the array back together and return it.
*/

const numberWords = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
                     six: 6, seven: 7, eight: 8, nine: 9}

function wordToDigit(string) {
  Object.keys(numberWords).forEach(word => {
    string = string.replaceAll(word, numberWords[word]);
  })

  return string
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."