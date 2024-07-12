const accountId = 144553
let accountEmail = "ajit@google.com"
var accountPassword = "12345"
accountCity = "Allahabad"
let accountState;

// accountId =  // not allowed to assign a constant variable

accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/**
 prefer not to use var 
 because of issue in block scope and functional scope
 */

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);