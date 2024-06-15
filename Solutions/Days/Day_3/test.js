const { Console } = require('console');
var IOManager=require('./io');
var fileName="data.json";
IOManager.serialize(fileName,people);
console.log("Node js main work is completed");


//IOManager.deSerialize(fileName);