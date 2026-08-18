let  deposit =( toAccount, amount)=>{
     return "Depositing  Amount " + amount + " to Account "+toAccount;
}

let withdraw=( fromAccount, amount)=>{
     return "Withdrawing Amount " + amount + " from Account "+fromAccount;
}

let checkBalance=(accountNumber)=> {
    return "Balance for account " + accountNumber + " is ₹10,000";
}

let fundsTransfer=(fromAccount, toAccount, amount )=>{
    console.log("Funds Transfer Begin");
    var withdraResult=withdraw(fromAccount, 9000);
    console.log(withdraResult); 
    var depositResult=deposit(toAccount, 9000);
    console.log(depositResult);
    console.log("Funds transfer  process terminated");
}

fundsTransfer(888,999, 50000);