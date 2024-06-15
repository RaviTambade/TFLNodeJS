
var Taxation =require('./taxcontrolle');
var Notification=require('./notificationcontrollerjs');
var BankingOperation=require('./bankcontroller');
var eventModule=require('events');
var emitter=new eventModule.EventEmitter();

//Registration of events with event Listeners
//attachment of event with event handler
//Mapping events with Callback functions

//configuration is always kept aside from actual calling function
//Event Routing
emitter.addListener('underBalance',Notification.sendEmail);
emitter.addListener('underBalance',Notification.sendSMS);
emmiter.addListener('underBalance',BankingOperation.blockAccount);
emitter.addListener('overBalance',Taxation.payIncomeTax);

//Loosely Coupled, Highly cohesive

exports.Account= function(initialAmount){
    //state
    //behaviour
    var balance=initialAmount;

    var monitor=function(){
        //regulation
        if(balance<=5000){   
            emitter.emit("underBalance");
        }
        else if(balance>=250000){
            emitter.emit("overBalance");
        }
    }

    var withdraw=function(amount){
        balance=balance-amount;
        monitor();
    }

    var deposit=function(amount){
        balance=balance+ amount;
        monitor();
    }

    var getBalance=function(){
        return balance;
    }

    //return block
    //allows to expose internal functions for outside invoking
    return{
        withdraw:withdraw,
        deposit:deposit,
        getBalance:getBalance
    }
}