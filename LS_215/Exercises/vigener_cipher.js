/*
given text to encrypt and a keyword
rotate the given text based on the keyword's letter-positions
the keyword gets converted to zero-index charcode (a = 0, z = 25)

and each letter in the keyword get's applied as the rotation amount to the 
original string.

charcodeat - 97

m, e, a, t => 12, 4, 0, 19
we can iterate over each letter in the given string
  call the caesar cipher on each character if it is alphabetic
  if we 'loop' the array of the cipher keyword values to the length
  of the given string we can just use corresponding index values


plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

given a string and keyword
lowercase the keyword
split the keyword into characters and map to the rotation amount

split the given string into characters
create a keyword counter starting at 0;

map the array of characters and call the cipher function on each alphabetic char

  on each loop increment the keyword counter 1 unleess
  the keyword counter is equal to the length of the keyword
  in which case it should be set to 0

join the array of characters and return the string

*/

function vigenerCipher(string, keyword) {
  let rotationArr = keyword.toLowerCase().split('').map(char => {
    return char.charCodeAt() - 97
  });

  let keywordCounter = -1;

  return string.split('').map(char => {
    if (keywordCounter >= keyword.length - 1) {
      keywordCounter = 0;
    } else {
      keywordCounter += 1;
    }

    if (char.match(/[a-z]/i)) {
      return rotateLetter(char, rotationArr[keywordCounter]);
    } else {
      return char;
    }
  }).join('');
}

console.log(vigenerCipher("Hi-Vis", "meat")) //
//                         meatme
console.log(vigenerCipher("Pine", "meat")); // Bmnx
console.log(vigenerCipher("Pine", "meAt")); // Bmnx
console.log(vigenerCipher("Pineapples don't go on pizzas!", "meat")) // Bmnxmtpeqw dhz'x gh ar pbldal!

function rotateLetter(letter, key) {
  let upperCase = false;

  if (letter.match(/[A-Z]/)) {
    upperCase = true;
  }

  let charCode = letter.toLowerCase().charCodeAt();
  let newLetter = String.fromCharCode(((charCode - 97 + key) % 26) + 97)

  return upperCase ? newLetter.toUpperCase() : newLetter;
}

function caesarEncrypt(str, key) {
  let rotated = str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      return rotateLetter(char, key);
    } 

    return char;
  });

  return rotated.join('');
}

