"use strict";

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    let newName = capitalizeWords(removeDots(band.name));
    let newCountry = 'Canada';

    return {
      name: newName,
      country: newCountry,
      active: band.active,
    }
  })
}

function capitalizeWords(string) {
    return string.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

function removeDots(string) {
  return string.replaceAll('.', '');
}

console.log(processBands(bands));
console.log(bands);

/*
given an array of bands with each band represented by an obj.
- Change all band countries to Canada
- Capitalize the first letter of each word in the band name
- remove all'.' characters from the band names

return a new array of objects.

create a new band obj {}

iterate over each band in the given array
  for each key in the obj
    add the key to the new band obj
    for name values 
      first remove all '.' charcters
      then capitalize the first letter if each word
      add to the obj
    for country values
      save each country as 'Canada'
    for active values
      add whatever is in the original object.

return the new object.
      
*/
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]