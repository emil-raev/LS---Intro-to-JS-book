The chief difference between null and undefined is that you must use null explicitly if you want to use it; undefined can arise implicitly. 

**% vs modulo**
- Remainder operations return a positive integer when the first operand is positive, and a negative integer when the first operand is negative.
- Modulo operations return a positive integer when the second operand is positive, and a negative integer when the second operand is negative.

```
>NaN === NaN
= false

> let value = NaN;
> Number.isNaN(value)
= true

> Object.is(value, NaN)
= true

> 0 / 0
= NaN

> Infinity - Infinity
= NaN

> Infinity / Infinity
= NaN

> 1234567890 / Infinity
= 0
```

- An expression is anything that JavaScript can evaluate to a value, even if that value is undefined or null. With only a few exceptions, almost everything you write in JavaScript is an expression. 

- The statements listed by MDN always evaluate as undefined. They differ from expressions in that you cannot use them as part of another expression.