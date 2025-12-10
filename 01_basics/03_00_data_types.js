// Data Types in JavaScript

// Primitive Data Types
// we get copies of the value in memory (stored directly) (called by value)
let name = "John Doe"; // String
let age = 30; // Number (2^53 - 1)
let isStudent = false; // Boolean (true or false)
let undefinedVariable; // Undefined - variable is declared but not assigned a value
let nullVariable = null; // Null - that is a special value representing "no value or empty"
let bigIntVariable = 9007199254741991n; // BigInt - for integers larger than 2^53 - 1
let symbolVariable = Symbol("uniqueIdentifier"); // Symbol - used to create unique identifiers

// Non-Primitive Data Types
// we get references to the value in memory (stored as a pointer) (called by reference)
let address = { street: "123 Main St", city: "Anytown", zip: "12345" }; // Object
let hobbies = ["reading", "traveling", "gaming"]; // Array - a special type of object used to store ordered collections

console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object" (this is a known quirk in JavaScript)
console.log(typeof name) // "string"
console.log(typeof NaN) // "number" - represents "Not-a-Number"
