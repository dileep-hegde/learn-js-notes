// ++++++++++++++ Numbers in JavaScript ++++++++++++++

const score = 400
console.log(score); // 400
console.log(score.toFixed(2)) // "400.00" // convert to string with 2 decimal places

const balance = Number(100)
console.log(balance); // [Number: 100]
console.log(balance.toString()) // "100" // now you can use string methods on it
console.log(balance.toFixed(2)) // "100.00" // convert to string with 2 decimal places

// both primitive number and Number object can use number methods why?
// because JavaScript automatically converts primitive numbers to Number objects
// when you call methods on them and then converts them back to primitive numbers
console.log(typeof score) // "number"
console.log(typeof balance) // "number"

// When you use a method on a numeric primitive, the JavaScript engine automatically creates a temporary "wrapper object" (Number object)
// behind the scenes. This process is often called "auto-boxing" or "boxing"
// This temporary object allows you to access methods and properties defined on the Number prototype
// For example, when you call score.toFixed(2), JavaScript does something like this internally:
// 1. Creates a temporary Number object from the primitive score
// 2. Calls the toFixed(2) method on that temporary object
// 3. Returns the result of the method call
// After the method call, the temporary object is discarded, and you're left with the original primitive value
// which is also known as "unboxing"

let num = 123.456789
console.log(num.toFixed(2)) // "123.46" // rounds to 2 decimal places
console.log(num.toPrecision(5)) // "123.46" // total of 5 significant digits
console.log(num.toExponential(3)) // "1.235e+2" // in exponential notation with 3 decimal places

// Note: toFixed, toPrecision, and toExponential all return strings
num = 23.256
console.log(num.toFixed(2)) // "23.26"
console.log(num.toPrecision(6)) // "23.2560"
console.log(num.toPrecision(1)) // "2e+1"
console.log(num.toExponential(4)) // "2.3256e+1"

let trillion = 1_000_000_000_000 // using underscores for readability
console.log(trillion); // 1000000000000
console.log(trillion.toLocaleString('en-In')) // "1,00,00,00,00,00,000" Indian numbering format

Number.MAX_SAFE_INTEGER // 9007199254740991 (2^53 - 1)
Number.MIN_SAFE_INTEGER // -9007199254740991 (-(2^53 - 1))
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
Number.NaN // NaN

// You can check if a value is NaN using Number.isNaN()
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(123)) // false

// ++++++++++++++ Math Object ++++++++++++++

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

console.log(Math.round(4.6)) // 5
console.log(Math.round(4.4)) // 4

console.log(Math.floor(4.9)) // 4
console.log(Math.ceil(4.1)) // 5

console.log(Math.sqrt(16)) // 4
console.log(Math.pow(2, 3)) // 8

console.log(Math.abs(-7)) // 7

console.log(Math.min(3, 1, 4, 2)) // 1
console.log(Math.max(3, 1, 4, 2)) // 4

console.log(Math.random()) // random number between 0 (inclusive) and 1 (exclusive)
// Example: 0.123456789

// To get a random number in a specific range, you can use this formula:
let min = 1
let max = 10
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min
}

console.log((Math.random() * 10) + 1) // random number between 1 and 10
// use brackets to ensure correct order of operations
// adding 1 is to shift the range from 0-9 to 1-10

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Explanation:
// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
// Multiplying by (max - min + 1) scales this to a range of 0 to (max - min + 1).
// (max - min + 1) is used instead of (max - min) to make the maximum value inclusive.
// Math.floor() then rounds this down to the nearest whole number, giving us an integer from 0 to (max - min).
// Finally, adding min shifts the range to be from min to max (inclusive).

