// Stack (Primitive Data Types) vs Heap (Reference Data Types)

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log (myYoutubeName);
console.log (anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// STACK / VARIABLES:
// [ myYoutubeName ] -> "hiteshchoudharydotcom"    (primitive)
// [ anotherName  ] -> "chaiaurcode"               (primitive)
//
// [ userOne ] ----\
//                  \
//                   > (heap object) { email: "hitesh@google.com", upi: "user@ybl" }
//                  /
// [ userTwo ] ----/
//
// HEAP:
// { email: "hitesh@google.com", upi: "user@ybl" }


// When you declare a variable, the JavaScript engine decides where to store it:
// Primitives (e.g., let num = 10;): The variable name (num) and its value (10) are stored directly on the stack.
// Non-Primitives (e.g., let person = { name: 'John' };):
//  - The actual object data ({ name: 'John' }) is stored in the heap.
//  - The variable name (person) and a reference (pointer) to the object's location in the heap are stored on the stack

// This distinction is why assigning a new variable a primitive value creates a copy (pass-by-value),
// whereas assigning an object creates another reference to the same object in the heap (pass-by-reference),
// meaning changes to one variable affect the other

// https://felixgerschau.com/javascript-memory-management/#memory-life-cycle // extra reference