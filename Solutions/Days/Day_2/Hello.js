//Entry Point for Node Js Application

var handler=require('./Handler');

//basic syntax 
/*
Author:Ravi Tambade


*/
//C , C++, C#, Java Complied Programming lanauge
//C source code is compiled by C compiler into exe to dll
//java soruce code is compiled by java compiler into .class file

//int count;
//string name;

//Python 
//Javascript language is interpred procedural  Scripted programming 
console.log("Welcome to MERN Stack");
var count=45;
var title="Softobiz";
var status=false;
console.log( "Showing content of Person");

//JSON:Javascript Object Notation
//Object:real world entity
//      state:keys with their respective value
//      behaviour: Method
//      identitfier (unique name/ no)
console.log("count=" +count );
console.log("Name= "+ title);
// function declaration

//SOC:
//seperation of concern
//Direct Call
//Blokcing Call
//Sychronous Call
//handler.display();

//indirect call
//NonBlocking Call
//Multitasking.............. ?????????

//Registering functions
//address of functions initializedse
//Mapping functions to be called after some time interaval
//(mapping listener functions)
//function Routing (Event Router)
setInterval(handler.display,3000);
setInterval(handler.print,4000);
console.log("End of Node JS Application")
//Can you hear me ????????????