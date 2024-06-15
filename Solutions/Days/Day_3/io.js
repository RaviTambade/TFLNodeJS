//Software Development Approach
//Procedural Approach
//Natural Approach: Object Oriented Approach
//1.Apply Abstraction
        //essentail Charcteritics of an Application from the observer(End User)
//2.Apply Encapsualtion
       //Hiding complexity
//3.Apply reusbility
//4.Persistence:

//Storing the state of objects (Data) into secondary memory (files)  (Serialization)
//restoring the state of an object from secondary memory (files)     (DeSerialization)
//File I/O Operations
//Node js provided predefined module fs module

//Data Access Logic Layer (DAL)
var fsModule=require('fs');
exports.serialize=function(title,allMembers){
    //file writing 
    var data= JSON.stringify(allMembers);
    var onFileWrite=function()
    {
        console.log("File content written successfully");
        console.log("This is code segment execution from callback function");
    } 
    //arrow function is inline function
    fsModule.writeFile(title,data,onFileWrite);
    console.log("After Writing function is called......");
};

exports.deSerialize=function(title){
    //file reading
    fsModule.readFile(title,(err,data)=>{
        var strData=data.toString();
        var retrievedUsers=JSON.parse(strData);
        console.log(retrievedUsers);
    })
};