// https://tc39.es/proposal-temporal/docs/
// Date has been a long-standing pain point in ECMAScript. This is a proposal for Temporal, a global Object
// that acts as a top-level namespace (like Math), that brings a modern date/time API to the ECMAScript language.
// For a detailed look at some of the problems with Date, and the motivations for Temporal

// Date and Time in JavaScript
let currentDate = new Date()
console.log("Current Date and Time:", currentDate.toString())
console.log("Date String:", currentDate.toDateString())
console.log("Time String:", currentDate.toTimeString())
console.log("Locale String:", currentDate.toLocaleString())
console.log("UTC String:", currentDate.toUTCString())
console.log("ISO String:", currentDate.toISOString())

// other useful methods
console.log("Year:", currentDate.getFullYear())
console.log("Month (0-11):", currentDate.getMonth())
console.log("Date:", currentDate.getDate())
console.log("Hours:", currentDate.getHours())
console.log("Minutes:", currentDate.getMinutes())
console.log("Seconds:", currentDate.getSeconds())
console.log("Milliseconds:", currentDate.getMilliseconds())
console.log("Day of Week (0-6):", currentDate.getDay())

// Creating a specific date
let specificDate = new Date('2024-12-25T10:30:00Z')
let specificDateLocal = new Date(2024, 11, 25, 10, 30, 0) // Note: Month is 0-indexed
let specificFormattedDate  = specificDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
console.log("\nSpecific Date and Time:", specificDate.toString())
console.log("Specific Date and Time (Local):", specificDateLocal.toString())
console.log("Specific Date and Time (Formatted for India):", specificFormattedDate)

// Timestamp
let timestamp = Date.now()
console.log("\nCurrent Timestamp (milliseconds since Jan 1, 1970):", timestamp)

// compare specific date time with timestamp
console.log("Specific Date Timestamp:", specificDate.getTime())
console.log("Is Specific Date in the past?", specificDate.getTime() < timestamp)

console.log(new Date().getSeconds()) // current seconds
console.log(Math.floor(Date.now() / 1000)) // current timestamp in seconds

// Date with long weekday using toLocaleString()
let longWeekday = currentDate.toLocaleString('en-US', { weekday: 'long' })
console.log("Long Weekday:", longWeekday) // e.g., "Monday"

