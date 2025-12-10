// Operations with different types of operators in JavaScript
// https://tc39.es/ecma262/#sec-type-conversion reference for type conversions

// Arithmetic Operators
let a = 10
let b = 3

console.table({
    "a": a,
    "b": b
})

// Arithmetic Operations
console.log("\nArithmetic Operations with a and b:")
console.table({
  "Addition (+)": a + b,
  "Subtraction (-)": a - b,
  "Multiplication (*)": a * b,
  "Division (/)": a / b,
  "Modulus (%)": a % b,
  "Exponentiation (**)": a ** b
})

// String Concatenation
let firstName = "John"
let lastName = "Doe"
console.log("\nString Concatenation: (+)")
console.table({
    "First Name": firstName,
    "Last Name": lastName,
    "Full Name": firstName + " " + lastName
})

// String and Number Combination
let str = "The answer is: "
let numStr = "10"
let num2 = 5
console.log("\nString and Number Combination with Numeric String: (+)")
console.table({
    "String": str,
    "Numeric String": numStr,
    "Number": num2,
    "String + Number": str + num2,
    "NumericString + Number": numStr + num2, // results in string concatenation
    "Number + NumericString": num2 + numStr, // results in string concatenation
    "NumericString + Number + Number": numStr + num2 + num2, // results in string concatenation
    "Number + Number + NumericString": num2 + num2 + numStr // results in number addition followed by string concatenation
})

// Don't Use the Unary Plus Operator to convert non-numeric strings
// not recommended
console.log(+true) // 1
console.log(+false) // 0
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+"") // 0

// Comparison Operators
// Avoid using comparison operators on different data types. Unexpected results may occur.
// Avoid this: console.log("5" > 3) // true
// Instead, explicitly convert types before comparison.
// Avoid comparison with null or undefined
// Avoid this: console.log(null >= 0) // true
// Instead, explicitly check for null or undefined before comparison.
console.log("\nComparison Operations on a and b:")
console.table({
  "Equal (==)": a == b, // loose equality
  "Not Equal (!=)": a != b, // loose inequality
  "Strict Equal (===)": a === b, // strict equality
  "Strict Not Equal (!==)": a !== b, // strict inequality
  "Greater Than (>)": a > b,
  "Less Than (<)": a < b,
  "Greater Than or Equal (>=)": a >= b,
  "Less Than or Equal (<=)": a <= b
})

// Logical Operators
let x = true
let y = false

console.log("\nLogical Operations:")
console.table({
    "x": x,
    "y": y,
  "Logical AND (x && y)": x && y,
  "Logical OR (x || y)": x || y,
  "Logical NOT (!x)": !x
})

// Increment and Decrement Operators
let d = 7
console.log("\nIncrement and Decrement Operations:")
console.table({
  "d": d,
  "Post-Increment (d++)": d++,
  "After Post-Increment": d,
  "Pre-Increment (++d)": ++d,
  "After Pre-Increment": d,
  "Post-Decrement (d--)": d--,
  "After Post-Decrement": d,
  "Pre-Decrement (--d)": --d,
  "After Pre-Decrement": d
})

// Assignment Operators
let c = 5
console.log("\nAssignment Operations:")
console.table({
    "c": c,
    "c += 2": (c += 2),
    "c -= 2": (c -= 2),
    "c *= 2": (c *= 2),
    "c /= 2": (c /= 2),
    "c %= 2": (c %= 2)
})

// Ternary Operator
let age = 20
let canVote = (age >= 18) ? "Yes" : "No"
console.log("\nTernary Operation:")
console.table({
  "Age": age,
  "Can Vote": canVote
})

// Typeof Operator
console.log("\nTypeof Operations:")
console.table({
  "Type of a": typeof a,
  "Type of x": typeof x,
  "Type of name": typeof "John Doe",
  "Type of undefinedVariable": typeof undefined,
  "Type of nullVariable": typeof null
})