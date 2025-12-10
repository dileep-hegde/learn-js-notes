// Number Conversion
let score = "33abc"

// console.log(typeof score) // "string"
// console.log(typeof(score)) // "string" // we can write like this

let invalidValueOrStringInNumber = Number(score)
// console.log(typeof invalidValueOrStringInNumber) // "number"
// console.log(invalidValueOrStringInNumber) // "NaN" a.k.a "Not a Number" which is of type number

let number = 22
let name = undefined
let age = null
let isStudent = true

let numberInNumber = Number(number) // number
let undefinedInNumber = Number(name) // NaN
let nullInNumber = Number(age) // 0
let trueInNumber = Number(isStudent) // 1
let falseInNumber = Number(!isStudent) // 0

console.table({numberInNumber, invalidValueOrStringInNumber, undefinedInNumber, nullInNumber, trueInNumber, falseInNumber})

// Boolean Conversion
let isLoggedIn = 1
let emptyString = ""
let anyString = "value"

let isLoggedInValueOneInBoolean = Boolean(isLoggedIn) // true
let isLoggedInValueZeroInBoolean = Boolean(!isLoggedIn) // false
let emptyStringInBoolean = Boolean(emptyString) // false
let anyStringInBoolean = Boolean(anyString) // true

console.table({isLoggedInValueOneInBoolean, isLoggedInValueZeroInBoolean, emptyStringInBoolean, anyStringInBoolean})

// String Conversion
let someNumber = 33
let someNumberInString = String(someNumber)
console.table({someNumberInString})