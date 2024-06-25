"use strict";

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

/*
given a word, and an array of words
find all the words contained in the array that are anagrams of the given word

How to tell if something is an anagram of another word?
  same number of letters
  same type of letters
  same number of the same types

Count the occurences of each letter in the given word
  create a new word count obj
  given a word
  iterate over each letter of the word
    for each letter
    if the letter is in the obj
      increment the count
    if it isn't create a new key-value
      with the value set to 1

  return the letter count obj

Count the occurences of each letter in each of the array words
  iterate over the array and return an array of word count objects (map)

Select from the array list only those words that match
  iterate over the array and return only those words that are anagrams (filter)
    for each key (letter) in the given word
      check if the array word has that key and if the values match
      if they don't return false
    if you make it through all the letters without finding a non-match
      return true

*/

function letterCount(word) {
  let countOfChars = {};

  word.split('').forEach(char => {
    countOfChars[char] ? countOfChars[char] += 1 : countOfChars[char] = 1;
  })

  return countOfChars;
}

function letterMatch(word1, word2) {
  return Object.keys(word1).every(letter => word1[letter] === word2[letter]);
}

function anagram(word, list) {
  let wordCount = letterCount(word);

  return list.filter(arrWord => {
    return letterMatch(wordCount, letterCount(arrWord));
  })
 }