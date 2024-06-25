/*
rail fence cipher
for now, assume 3 rails only.

ENCODE
  3 rows
  row 1: char - 3 spaces - char - 3 spaces

  Given a string to encode, remove whitespace
  iterate through the characters of the message to be encoded
    starting with rail 1. Place the first letter on the rail and 3 '.'s
    rail 2 takes the next letter with a '.' in front 
    rail 3 takes the next letter with 2 '.'s in front followed by
    3 '.'s.
              WE ARE DISCOVERD FLEE AT ONCE
  iterate trhough the rails while iterating over the characters
  array of rails = [[rail1], [rail2], [rail3]]
  railsCounter = {count: 0, direction: 'up'}

  for each char
    add the char to the current railsCounter
    increment the rails counter up or down depending on the direction property
      if the rails counter is now greater than the number of rails - 1
        subtract 2 from the counter
        and set the direction flag to 'down'
      if the rails counter is now less than 0
        add 2 to the counter
        and set the direction flag to 'up'



The code so far: 3 rails [W E C R L T E], [E R D S O E E F E A O C], [A I V D E N]
*/

function railEncode(message) {
  message = message.replaceAll(/[^A-Z]/g, '');
  let rails = [[], [], []];

  railsCounter = {count: 0, countUp: true}

  message.split('').forEach(char => {
    rails[railsCounter.count].push(char);

    railsCounter.countUp ? railsCounter.count += 1 : railsCounter.count -= 1;
    if (railsCounter.count > rails.length - 1) {
      railsCounter.count -= 2;
      railsCounter.countUp = !railsCounter.countUp;
    } else if (railsCounter.count < 0){
      railsCounter.count += 2;
      railsCounter.countUp = !railsCounter.countUp;
    }
  })

  return rails.flat().join('');
}

function railCounts(message) {
  message = message.replaceAll(/[^A-Z]/g, '');
  let rails = [[], [], []];

  railsCounter = {count: 0, countUp: true}

  message.split('').forEach(char => {
    rails[railsCounter.count].push(char);

    railsCounter.countUp ? railsCounter.count += 1 : railsCounter.count -= 1;
    if (railsCounter.count > rails.length - 1) {
      railsCounter.count -= 2;
      railsCounter.countUp = !railsCounter.countUp;
    } else if (railsCounter.count < 0){
      railsCounter.count += 2;
      railsCounter.countUp = !railsCounter.countUp;
    }
  })

  return rails.map(rail => rail.length);
}

console.log(railEncode('WE ARE DISCOVERED FLEE AT ONCE'));


/*
start_spacing 
spacing is set to the first rails spacing
    starting rail is = if the number of rails is odd
                          the number of rails
                       otherwise 
                          the number of rails + 1

spacing = {count: start_spacing, goingDown: false }
  
map the rails to add the correct spacing between the characters
  using the index to determine starting offset.
  newArr = []
  add the index number of '.' to newArr
  iterate over the rails characters
    add the current character to newArr
    add the number of '.'s based on the spacing variable

  if the spacing count is equal the start_spacing ||
  if the spacing count is equal to 1
    toggle the direction

  increment the spacing counter up or down 2 depdning on the direction property
  
  return the newArr



decode

WECRLTEERDSOEEFEAOCAIVDEN ->> WE ARE DISCOVERED FLEE AT ONCE
WE ARE DISCOVERED FLEE AT ONCE ->> WECRLTEERDSOEEFEAOCAIVDEN 

3 rails


W . . . . . I . . . . . R . . . L . . . T . . . E
. E . . . D . S . . . E . E . F . E . A . O . C .
. . A . E . . . C . V . . . D . . . E . . . N . .
. . . R . . . . . O . . . . . . . . . . . . . . .


W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

create number of arrays based on how many rails we have
rails = [[], [], []]

determine the start spacing
  if rails num is odd
      num of rails + 1
  else 
      num of rails + 2

spacing_count = {count: start_spacing, goingUp: true}

map the rails
  add the index number of '.' to newArr
  starting from the index number of the rail
  iterate over every character in the given string
    if the character index is a multiple of the spacing (does current index - rail index % spacing_count === 0)
      add that character to the rail
    else
      add '.' to the rail
  
  if the spacing count is equal the start_spacing ||
  if the spacing count is equal to 2
    toggle the direction

  increment the spacing_count.count by 2 depening on the goingUp flag

return the mapped rails or log them.


*/

function railDecode(code) {
  let startSlice = 0;
  let rails = [];

  railCounts(code).forEach((num, index, array) => {
    rails.push(code.slice(startSlice, num + startSlice));

    startSlice += num;
  })

  let startSpacing;
  if (rails.length % 2 !== 0) {
    startSpacing = rails.length + 1;
  } else {
    startSpacing = rails.length + 2;                   
  }

  let spacing = { count: startSpacing, goingUp: true };

  let message = [];

  rails.forEach((rail, offset) => {
    let charPlace = 0;

    rail.split('').forEach(char => {
      message[charPlace + offset] = char;
      charPlace += spacing.count;
    })

    if (spacing.count === startSpacing || spacing.count === 2) {
      spacing.goingUp = !spacing.goingUp;
    } 
      
    spacing.goingUp ? spacing.count += 2 : spacing.count -= 2;
  })

  return message.join('');
}

console.log(railDecode('WECRLTEERDSOEEFEAOCAIVDEN'))


