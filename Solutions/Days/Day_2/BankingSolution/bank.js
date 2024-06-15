var accounting=require('./account');

var acct123=new accounting.Account(266000);
//performing action
acct123.deposit(7000);
var acct123Balance=acct123.getBalance();
console.log( "Balance of acct123="+ acct123Balance);

var acct128=new accounting.Account(16000);
acct128.withdraw(15000);

var acct128Balance=acct128.getBalance();
console.log( "Balance of acct128="+ acct128Balance);
