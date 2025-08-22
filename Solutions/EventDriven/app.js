//event driven Architecture
var events =require('events');
var handlers=require("./handlers"); 

var eventMgr= new events.EventEmitter();


//Event registration

eventMgr.on("overbalance", handlers.onOverBalance);
eventMgr.on("underbalance",handlers.onUnderBalance)

var Account= function(initialAmount){

    var balance=initialAmount;

    var deposit=function(amount){

        console.log("Performing credit to account  task");
        balance=balance+amount;
        if(balance >=700000){
            eventMgr.emit("overbalance")  //trigger an event
        }
    }

    var withdraw=function(amount){
        console.log("Performing debit to account  task");
        balance=balance-amount;
        if(balance <10000){
                eventMgr.emit("underbalance")  //trigger an event
        }
    }
     return{
        debit:withdraw,
        credit:deposit

}
}

var acct=new Account(56000);
acct.credit(1800000);