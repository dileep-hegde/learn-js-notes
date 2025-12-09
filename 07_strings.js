// Strings are used to represent text and are enclosed in
// single quotes (' '), double quotes (" "), or backticks (` `).

let singleQuoteString = 'Hello, World!'
let doubleQuoteString = "Hello, World!"
let backtickString = `Hello, World!`

// Strings can be concatenated using the + operator.
// Instead, use template literals for easier string interpolation.
// String Interpolation is a way to embed expressions within string literals,
// allowing for easier and more readable string construction.
let name = "Alice"
let age = 25

// Using template literals for string interpolation
let greeting = `My name is ${name}, and I am ${age} years old.`

console.log(greeting) // My name is Alice, and I am 25 years old.
console.log(typeof greeting) // string

// Don't get confused between string primitives and String objects.
// String primitives are created using string literals,
// while String objects are created using the String constructor.
// but without using the new keyword, it returns a string primitive. why?
// Because String() is a function that converts its argument to a string primitive.

let city = String('New York')

console.log(city) //  New York
console.log(typeof city) // string

// Another way to declare strings is by using the String constructor.
let gameName = new String('gta vi')

console.log(gameName)
console.log(typeof gameName) // object

/*  `new String('value')` vs String('value') or `value`
That's the key distinction that often trips up developers\! The difference between using `new String('value')`
and simply declaring a literal string (`'value'`) lies in whether you create a **Primitive** or an **Object**.

## 1\. The Literal String (Primitive)

When you use a literal, you create a JavaScript **primitive type**.

```javascript
const name1 = 'Hitesh';
const name2 = 'Hitesh';
```

  * **Type:** `string` (Primitive)
  * **Memory:** Typically highly optimized, often sharing the same memory location for identical values
  (similar to Java's String Pool concept, though JS doesn't guarantee it).
  * **Immutability:** The value itself is **immutable**.
  * **Behavior:** When you compare these, they are compared by **value**.

```javascript
console.log(name1 === name2); // Output: true
```

## 2\. The `new String()` Constructor (Object) 📦

When you use the `new` keyword, you explicitly create a **String object** wrapper.

```javascript
const name3 = new String('Hitesh');
const name4 = new String('Hitesh');
```

  * **Type:** `object` (specifically, a `String` object).
  * **Memory:** Each call to `new String()` creates a **new, distinct object** in memory,
  even if the underlying string value is the same.
  * **Immutability:** While the underlying string value is still immutable (you can't change the characters
  inside the object), the variable itself holds a **reference** to a unique object.
  * **Behavior:** When you compare these objects using the strict equality operator (`===`),
  they are compared by **reference**. Since they are two different objects in memory, they are not strictly equal.

```javascript
console.log(name3 === name4); // Output: false (They are two different objects)
```

-----

## Key Takeaway: Comparison

| Feature | Literal String (e.g., `'Hitesh'`) | String Object (e.g., `new String('Hitesh')`) |
| :--- | :--- | :--- |
| **Data Type** | **Primitive** (`typeof` is `'string'`) | **Object** (`typeof` is `'object'`) |
| **Equality (`===`)** | Compares **Value** | Compares **Reference** (always distinct) |
| **Recommendation** | **Always use this** | Avoid, unless explicitly required for specific object manipulation (rare) |

For almost all JavaScript development, you should stick to using the **literal string primitive**.
Using `new String()` can lead to unexpected behaviors with equality checks, as demonstrated above.
 */

console.log(gameName[0]) // G // this works because String objects behave like arrays of characters
// However, it's generally recommended to use string literals
// for simplicity and performance unless you specifically need a String object.

console.log(gameName.length) // 6
console.log(gameName.__proto__.length) // 0 as length here is a property of String.prototype, not of the instance

// gameName = {
//    0: 'G',
//    1: 'T',
//    2: 'A',
//    3: ' ',
//    4: 'V',
//    5: 'I',
//    length: 6,
//    __proto__: String.prototype
// }

console.log(gameName.toUpperCase())// GTA VI
// this does not modify the original string. why?
// Strings are immutable in JavaScript.Any method that seems to modify a string actually returns a new string.

// how it works internally? is javascript has string constant pool like java?
// No, JavaScript does not have a string constant pool like Java. Instead, JavaScript handles strings in a way
// that optimizes memory usage through techniques like string interning, but it does not have a dedicated pool.

console.log(gameName) // still gta vi

// methods
console.log(gameName.toLowerCase()) // gta vi // again, does not modify original string
console.log(gameName.charAt(2)) // a // there is at() method which allows negative indexing
console.log(gameName.indexOf('v')) // 4 // case-sensitive 'V' returns -1
console.log(gameName.substring(1, 4)) // ta  // from index 1 to 4 (not inclusive) // cannot accept negative indices

// slice() method with different scenarios which is same as substring() but can accept negative indices
console.log(gameName.slice(0, 2)) // gt // from index 0 to 2 (not inclusive)
console.log(gameName.slice(0, -1)) // gta v // from index 0 to last but one character
console.log(gameName.slice(-4, -1)) // a v // from fourth last to last but one character
// -4 means length - 4 = 6 - 4 = 2 (index 2)
// -1 means length - 1 = 6 - 1 = 5 (index 5)
// so, slice(2, 5) => a v
console.log(gameName.slice(-8, 2)) // gt // -8 is less than length, so starts from index 0 to index 2 (not inclusive)
console.log(gameName.slice(2, 8)) // a vi // 8 is more than length, so goes till end from index 2
console.log(gameName.slice(0, 0)) // '' // empty string // same as substring(0, 0)
console.log(gameName.slice(0, -8)) // '' // empty string // -8 is less than length, so goes till index 0
console.log(gameName.slice(-8)) // gta vi // -8 is less than length, so goes till end from index 0
console.log(gameName.slice(3)) // ' vi' // from index 3 (included) to end
console.log(gameName.slice(-2)) // 'vi' // last 2 characters // from index length - 2 to end

// other methods continued
console.log(gameName.split(' ')) // [ 'gta', 'vi' ]
console.log(gameName.trim()) // 'gta vi' // removes whitespace from both ends not in between // there is trimStart() and trimEnd() methods too
console.log(gameName.replace('vi', '6')) // gta 6 // 'VI' not found due to case-sensitivity
console.log(gameName.includes('ta')) // true
console.log(gameName.startsWith('gta')) // true
console.log(gameName.endsWith('vi')) // true
console.log(gameName.search('a')) // 2 // returns the index of first match or -1 if not found
console.log(gameName.repeat(3)) // gta vigta vigta vi

console.log(typeof gameName) // object
console.log(typeof gameName.valueOf()) // gta vi // string // returns the primitive value of the String object
gameName = "65"
console.log(typeof gameName) // string
console.log(typeof gameName.valueOf()) // 65 // string // returns the primitive value of the string primitive itself

console.log(gameName.concat(' is the next GTA game')) // 65 is the next GTA game

// is String can be managed with just methods?
// Yes, strings in JavaScript can be effectively managed using built-in methods without needing to manipulate
// them as objects directly. The String prototype provides a wide range of methods for string manipulation,
// searching, and formatting, allowing developers to work with strings in a straightforward manner.


/*
The Java vs. JavaScript Strings
While the concept of immutability is the same, their technical classification differs:

A. Java: Object for Efficiency (The String Pool)
In Java, String is an object, but it is optimized via the String Pool.
When you create a string literal (e.g., String s = "hello"), Java checks if "hello" already exists in the Pool.
If it does, the new variable just references the existing object. Immutability is critical here because
it guarantees that a shared string object cannot be accidentally changed by one variable, affecting all others.

B. JavaScript: Primitive with Object-Like Powers
In JavaScript, string is officially classified as one of the seven primitive types (like number or boolean).

The confusing part is that you can call methods like .toUpperCase() on it, which is normally only possible for objects. This is because JavaScript uses an internal mechanism called autoboxing or coercion:

- When you call gameName.toUpperCase(), the JavaScript engine temporarily
wraps the primitive string value in a dedicated String Object.
- The object's method (.toUpperCase()) is executed.
- The resulting value (the new string) is returned.
- The temporary String Object is immediately discarded.

Even when you explicitly use the object constructor (new String()), as was done in the video,
the underlying behavior of immutability for the character sequence remains the same.
 */

/*
   Type Coercion (Primarily JavaScript)

   Type Coercion is the automatic, implicit conversion of a value from one data type to another to
   complete an operation, typically dictated by an operator or function. Coercion is a core feature of
   loosely-typed languages like JavaScript.

   Implicit vs. Explicit Coercion
   - Implicit Coercion - Conversion done automatically by the language engine during an operation.
        - 5 + '5' -> '55' (Number 5 is coerced to string '5')
   - Explicit Coercion - Conversion done manually by the developer using built-in functions.
        - Number('5') -> 5

   Key Coercion Rules in JavaScript:

   - String Concatenation: If the + operator involves a string and any other type,
   the other type is usually coerced to a string.
     - Example: 1 + ' apples' -> '1 apples'
   - Arithmetic Operations: Operators like -, *, / coerce their operands to numbers.
     - Example: '10' - 5 -> 5 (String '10' is coerced to number 10)
   - Loose Equality (==): The loose equality operator attempts to coerce both operands to a common type
   before comparison.
     - Example: false == 0 -> true (Boolean false is coerced to number 0)

   Understanding the rules of coercion is critical in JavaScript to avoid unexpected bugs.
   Many developers prefer using the strict equality operator (===) to bypass implicit coercion
   and ensure both value and type are identical
 */