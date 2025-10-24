const accountId = 12345;
let accountName = 'John Doe';
var accountPassword = 'password123';
accountCity = 'New York';
let accountState;

//accountId = 67890; // This will throw an error because accountId is a constant.

accountName = 'Jane Doe';
accountPassword = 'newpassword456';
accountCity = 'Los Angeles';

console.log(accountId);

//prefer not to use var because of issue in block scopeand function scope.

console.table({
    accountId,
    accountName,
    accountPassword,
    accountCity,
    accountState
});