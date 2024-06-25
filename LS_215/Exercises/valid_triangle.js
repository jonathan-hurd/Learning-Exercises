/*
given three triangle sides, return a string representing the type of 
triangle that it is or invalid

equilateral trianlges have all the same length sides
isosceles triangles have 2 same length sides
scalene trianlges have no equal length sides


valid triangle must have all sides greater than 0
valid triangles must have two shortest sides greater than longest side
*/

function validTriangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort();

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return false;
  } else if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
    return false;
  }

  return true;
}

function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return 'invalid'
  }

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"