/*
given 3 angles of a triangle
return a string that describes the type of triangle it is

invalid - if the 3 angles do not equal 180 degrees
          or any of the 3 angles is equal to 0

right - one of the angles is exactly 90 degrees
acute - all three angles are less than 90 degrees
obtuse - one angle is greater than 90 degrees

all arguments will be integers and in degrees

*/

function triangle(...args) {
  if (args.reduce((a, b) => a + b) !== 180) {
    return 'invalid';
  } else if (args.includes(0)) {
    return 'invalid';
  }

  if (args.every(angle => angle < 90)) {
    return 'acute';
  } else if (args.includes(90)) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"