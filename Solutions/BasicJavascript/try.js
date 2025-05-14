// Java  imports java.util.*; //importing java.util package
// Python import os #importing os module
// C++ #include <iostream> //importing iostream library
// C# using System; //importing System namespace
// JavaScript import { createServer } from 'http'; //importing http module

//ECMA consourtium
//ECMA International is an organization that standardizes information and communication systems. It is responsible for the development and maintenance of several important standards, including the ECMAScript language specification, which is the foundation for JavaScript. The ECMA-262 standard defines the syntax, semantics, and behavior of JavaScript, ensuring consistency and compatibility across different implementations of the language. The latest version of ECMAScript is ES2023 (ECMAScript 2023), which includes new features and improvements to the language.
//Members: Microsoft, Google, Mozilla, Apple, IBM, and others.

//classical javascript
// ES5 (ECMAScript 5) is a version of JavaScript that was standardized in 2009. It introduced several new features and improvements to the language, making it more powerful and easier to work with. Some of the key features of ES5 include:
 //importing http module
//Basic JavaScript Syntax
// JavaScript is a high-level, interpreted programming language that is widely used for web development. It is known for its versatility and ability to create dynamic and interactive web pages. The basic syntax of JavaScript includes variables, data types, operators, control structures (if-else, loops), functions, and objects. JavaScript can be executed in web browsers or on server-side environments like Node.js.
// 1. Variables: Used to store data values. Declared using var, let, or const keywords.
// 2. Data Types: JavaScript supports several data types including strings, numbers, booleans, objects, arrays, and undefined.
// 3. Operators: JavaScript has various operators for arithmetic, comparison, logical operations, etc.
// 4. Control Structures: JavaScript supports conditional statements (if-else) and loops (for, while) for controlling the flow of execution.
// 5. Functions: Functions are reusable blocks of code that can be defined and called with parameters.
// 6. Objects: JavaScript is an object-oriented language, and objects are collections of key-value pairs that can represent complex data structures.


// ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many new features and syntax improvements. Some of the key features of ES6 include:
// 1. let and const: New ways to declare variables with block scope (let) and constants (const).
// 2. Arrow Functions: A shorter syntax for writing function expressions using the => syntax.
// 3. Template Literals: A new way to create strings using backticks (`) and allowing for multi-line strings and string interpolation.
// 4. Destructuring Assignment: A way to unpack values from arrays or properties from objects into distinct variables.
// 5. Classes: A new syntax for creating objects and inheritance, making it easier to work with object-oriented programming in JavaScript.
// 6. Promises: A new way to handle asynchronous operations, making it easier to work with callbacks and avoid "callback hell".
// 7. Modules: A new way to organize and share code using import and export statements.
// 8. Spread and Rest Operators: New syntax for working with arrays and function arguments, allowing for more flexible code.
// 9. Default Parameters: A way to set default values for function parameters.
// 10. for...of Loop: A new loop for iterating over iterable objects like arrays, strings, and maps.

//Node js gives default 
//http module
//fs module : file system module
//os module : operating system module
//events module : event module custome events underbalance, overbalance, etc


//Node module  consist of:
//inbuilt functions
//ready made functions with logic

var http=require('http');  //Module name

var fullname="Pratiksha Tambade"; //string
var age=22; //number
var status=false;  //boolean
var hobbies=["reading","travelling","cooking"]; //array
var count=undefined; //undefined
//C structure
//C++ class
//Java class
//Python class
//Javascript object (JSON)
//data is stored in key-value pair
//JSON object
var reservation1 = {    //json object
    id: 1,
    name: "Sarthak Kadam",
    email: "sarthak.kadam@gmail.com",
    boardingfrom: "Pune",
    boardingto: "Mumbai",
    date: "2025-10-05",
    time: "10:00 AM",
    seats: 2,
    price: 2000
};

var strReservation1 = JSON.stringify(reservation1); //convert json object to string
var reservation2 = JSON.parse(strReservation1); //convert string to json object

var todaysReservations=[
    {id: 1, name: "Sarthak Kadam",email: "sarthak.kadam@gmail.com", boardingfrom: "Pune", boardingto: "Mumbai", date: "2025-10-05",time: "10:00 AM",seats: 2,price: 2000},
    {id: 2,  name: "Pratiksha Tambade",  email: "pratiksha.tambade@gmail.com",  boardingfrom: "Manachar",  boardingto: "Pune",  date: "2025-1-06", time: "9:00 AM",seats: 1,price: 66 },
    {id: 3, name: "Sanika Bhor",email: "sarthak.kadam@gmail.com", boardingfrom: "Naish", boardingto: "Mumbai", date: "2025-10-05",time: "10:00 AM",seats: 2,price: 2000},
    {id: 4,  name: "Sumit Bhor",  email: "pratiksha.tambade@gmail.com",  boardingfrom: "Nagpur",  boardingto: "Pune",  date: "2025-1-06", time: "9:00 AM",seats: 1,price: 66 }
];


//Request handler function
var onRequestInput=function(request,response){
    //Request Processing logic
    response.writeHead(200,{"Content-Type":"text/html"}); //200 is status code, 200 means ok
    //Dyanamic HTML generation

    response.write("<h1>Welcome to Node.js</h1>");
    response.write("<h2>Full Name: "+fullname+"</h2>");
    response.write("<h2>Age: "+age+"</h2>");

    response.write("<ol>");
    for(var i=0;i<hobbies.length;i++){
        response.write("<li>+"+ hobbies[i]+ "</li>");
    }
    
    response.write("</ol>");
    response.end();
}
var server=http.createServer(onRequestInput);
server.listen(9000);
console.log("Server is running at http://localhost:9000/");