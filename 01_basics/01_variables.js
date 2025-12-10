const accountId = 12345
let accountEmail = "dileephegde@gmail.com"
var accountPassword = "password" // not recommended
accountCity = "Bangalore" // global variable (not recommended)
let accountState;

// accountId = 122 // Changing const not allowed
accountEmail = "abd@google.com"
accountPassword = 234436
accountCity = "New York"

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState })
/*
    Summary:
    - 'const' is used when the variable should not be reassigned.
    - 'let' is used if the variable value will change over time.
    - both 'const' and 'let' are block-scoped.
    - If a variable is not initialized then the default value is 'undefined'.

    - Prefer not to use 'var' for variable declaration.
        - Because, var is function-scoped and can lead to unexpected behavior due to hoisting.
    - Avoid creating global variables.
        - Global variables can be accessed and changed by any part of your code,
        which can lead to unexpected behavior and bugs.
*/
