function myFilter(array, func) {
  let filteredArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }

  return filteredArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let result = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
console.log(result);