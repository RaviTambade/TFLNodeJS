
//insert, update, delete , get from .json file
//1.insert, update, delete, get from json array (collection operations)
//2.insert, update, delete get from json file  (IO operations)
//
var members=[
    {"id":1, "name":"Samadhan", "email":"samadhant@gmail.com"},
    {"id":2, "name":"Rajeev", "email":"rajeev@gmail.com"},
    {"id":3, "name":"Shital", "email":"shital@gmail.com"}
];

var getAll=function(){
    return members;
};

var getByName=function(name){
    var foundPerson={};
    foundPerson=members.find((person)=>(person.name ==name));
    return foundPerson;
};

var getById=function(id){
    var foundPerson={};
    foundPerson=members.find((person)=>(person.id ==id));
    return foundPerson;
};

var remove=function(id){
     members=members.filter((person)=>(person.id !=id));
}

var insert=function(person){
    members.push(person)
}

var update=function(personTobeUpdated){
    members=members.filter((person)=>(person.id !=personTobeUpdated.id));
    members.push(personTobeUpdated);
}


//testing functions
var allMembers=getAll();
console.log(allMembers);
var newPerson={
    "id":6,
     "name":"Tanay",
     "email":"tanay.g@gmail."
}
insert(newPerson);

console.log("after insertion");
/*var idToBeSearched=2;
var thePerson=getById(idToBeSearched);
*/
console.log(allMembers);
/*var personName="Tanay";

var thePerson=getByName(personName);

console.log(thePerson);*/

/*var idToBeRemoved=1;
remove(idToBeRemoved);
*/

var personTobeUpdated={
    "id":3,
    "name":"Ramesh Sharma",
    "email":"ramesh.sharma@gmail.com",
    "contactnumber":9883456895
};

console.log(members);
update(personTobeUpdated);
console.log(members);



//alternative logic for remove

 /*const requiredIndex = members.findIndex(person => {return person.id === id;});
     if(requiredIndex === -1){
        return false;
     };
     return !!members.splice(requiredIndex, 1);
     */