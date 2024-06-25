let firstName = 'Jonathan';
let lastName = 'Hurd';

let fullName = firstName.concat(' ', lastName);

let arrayName = fullName.split(' ');

let language = 'JavaScript';

let idx = language.indexOf('S')
let charCode = language.charCodeAt(idx);

let a = 'a';
let b = 'B';

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

let pi = 22 / 7;

let boxNumber = (356).toString();
boxNumber = parseInt(boxNumber, 10);

console.log(typeof boxNumber);

boxNumber = boxNumber.toString();
console.log(typeof boxNumber);
console.log(language.slice(2, -1));
console.log(fact1[0]);

let theName = prompt('What is your name?');

if (theName.endsWith('!')) {
  console.log(`HELLO ${theName.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${theName}.`)
}
