Functions and classes are actually values in JavaScript, and their names are used in the same way as more traditional variables.

It's interesting to note that the return value of an assignment is the value on the right-hand side of the = operator, but declarations, with or without an initial value, always return undefined.

Note that const declarations require a value:
```
const foo; // SyntaxError: Missing initializer in const declaration
```

