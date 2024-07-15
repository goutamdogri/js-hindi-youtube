const accountId = 144553
let accountEmail = "goutam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// const --- accountId = 2 // not allowed. ```TypeError: Assignment to constant variable.```
// var --- block and functional scope does not exist. prefer not to use var

// without keyword --- it is possible, but do not use it.

// not initialized with a value --- it actually stores - "undefined"

accountEmail = "g@gmail.com"
accountPassword = "73568592"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);