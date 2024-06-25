/*
given text to encrypt and a keyword
rotate the given text based on the keyword's letter-positions
the keyword gets converted to zero-index charcode (a = 0, z = 25)

and each letter in the keyword get's applied as the rotation amount to the 
original string.
  meat => 

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
*/

console.log(vignerCipher("Pine", "meat")); // Bmnx
console.log(vignerCipher("Pine", "meAt")); // Bmnx
console.log(vignerCipher("Pineapples don't go on pizzas!", "meat")) // Bmnxmtpeqw dhz'x gh ar pbldal!

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

