/*
B:O   X:K   D:Q   C:P   N:A

G:T   R:E   F:S   J:W   H:U

V:I   L:Y   Z:M

13 blocks

Write function that give a word, returns true or false depending on whether or
not the word can be spelled with the blocks.

You may only use each block once in a word.

If you use one letter on a block, you may not use the other letter on the block

BATCH
{B: 'O'}
{B: 'O', N: 'A' }
{['B', 'O']: false}

{letters: ['B', 'O'], inUse: false}

[['B', 'O'], ...]

'BE' 
seen array = [['B', 'O']... ]

given a word
iterate over each letter in the word

  iterate over the array of characters
  when match is found, check if that character set is in the used array
    if yes
      return false
    if not in use
      place that character set in the used array.

if we reach the end of the word and no duplicates have been foudn
  return true

ALTERNATE
given a word
iterate over each letter in the word

  iterate over the array of characters
  if a match is found
    delete that set of characters
  if no match is found, return false

if we reach the end of the word
  return true


ALTERNATE
given a word
convert that word to uppercase
create a seen letter/block array
iterate over each letter in the word
  for each letter, find the block it belongs to (seperate function?)
  if the block is in the seen array
    return false
  if the block is not in the seen array
    add the block to the seen array

*/

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA',
                'GT', 'RE', 'FS', 'JW', 'HU',
                'VI', 'LY', 'ZM']

  let usedBlocks = [];
  let noDuplicateBlocks = true;

  word.split('').forEach(letter => {
    let block = findLettersBlock(letter, blocks);

    if (usedBlocks.includes(block)) {
      noDuplicateBlocks = false;
    } else {
      usedBlocks.push(block)
    }
  });

  return noDuplicateBlocks;
}

function findLettersBlock(letter, blocks) {
  return blocks.filter(block => block.match(new RegExp(letter, 'i')))[0];
}

// function isBlockWord(word) {
  // let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA',
  //               'GT', 'RE', 'FS', 'JW', 'HU',
  //               'VI', 'LY', 'ZM']

//   word = word.toUpperCase()

//   for (let i = 0; i < word.length; i += 1) {
//     blockIndex = letterAvailable(word[i], blocks)
//     if (blockIndex !== false) {
//       blocks.splice(blockIndex, 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// /*
// write a function, that given a letter and an array of words, returns
// true if the letter is in one of the words
// and returns false if the letter is not in one of the words

// */

// function letterAvailable(letter, blocks) {
//   for (let i = 0; i < blocks.length; i += 1) {
//     if (blocks[i].includes(letter)) {
//       return i;
//     }
//   }

//   return false;
// }
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true