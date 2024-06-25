let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

function totalArea(rectangles) {
  return rectangles.reduce((accumulator, [height, width]) => {
    return accumulator + (height * width);
  }, 0)
}

console.log(totalSquareArea(rectangles));    // 141