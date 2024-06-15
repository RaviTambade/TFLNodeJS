//Event Handlers
//Event Listeners
// Callback functions


//Library would contain set of reusable functions
//MutiTask functionality (behaviour)
//Multiple Tasks
//Task 1
exports.display=function(){
    var person={
        id:456,
        firstname:"Rajan",
        lastname:"Pande",
        email:"rajan.pande",
        address:{
                city:"Bhopal",
                state:"MP",
                country:"India"
        } 
    };
    console.log("Person full Name="+ person.firstname + " "+ person.lastname);
    console.log(person);
}

//Task 2
exports.print=function(){
    console.log("Logging data output ......")
};
