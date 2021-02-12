In the definition of a function, the names between parentheses are called parameters. The arguments are the values of those parameters.

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are local variables; they are only defined locally, within the body of the function.

Functions that always return a boolean value, i.e., true or false, are called predicates.

When this program starts running, the call stack initially has one item -- called a stack frame -- that represents the global (top-level) portion of the program. The initial stack frame is sometimes called the main function. JavaScript uses this frame to keep track of what part of the main program it is currently working on.

The call stack has a limited size that varies based on the JavaScript implementation. That size is usually sufficient for more than 10000 stack entries. If the stack runs out of room, you will see a RangeError exception together with a message that mentions the stack.