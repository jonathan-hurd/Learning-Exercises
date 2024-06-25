/*
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

initialize the register to 0
initialize the stack to []

*/

function minilang(commands) {
  let tokens = commands.split(' ');
  let register = 0;
  let stack = [];

  tokens.forEach(token => {
    switch (true) {
      case !!token.match(/\d/):
        register = Number(token);
        break;
      case token === 'PUSH':
        stack.push(register);
        break;
      case token === 'ADD':
        register += stack.pop();
        break;
      case token === 'SUB':
        register -= stack.pop();
        break;
      case token === 'MULT':
        register *= stack.pop();
        break;
      case token === 'DIV':
        register = Math.round(register / stack.pop());
        break;
      case token === 'REMAINDER':
        register = Math.round(register % stack.pop());
        break;
      case token === 'POP':
        register = stack.pop();
        break;
      case token === 'PRINT':
        console.log(register);
        break;
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)