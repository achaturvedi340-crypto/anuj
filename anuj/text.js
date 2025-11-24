const accountId = 14443
let accountEmail ="anurag123@gamil.com"
var accountPassward ="12345"
accountCity = "rewa"

// accountId=2 // not allowed
// { } this bloc is called scope

/*
Prefer not to use var
because of issue in block Scope and Funtional Scope
*/
console.log(accountId);
accountPassward = "23234343"
accountEmail = "anuj34@g,mail.com"
accountCity = "satna"
console.table([accountId, accountEmail, accountPassward, accountCity])