const express=require('express');  //downloaded module
const bodyParser=require('body-parser');
const fs=require('fs');   //inbuilt predefined module
var app=express();      //getting global object from express module
//set up middleware
//we use app.use method to configure middleware for web application
app.use(bodyParser.json())  ;

app.get('/',(req, res)=>{
    let htmlString="<h1>Welcome to HR Application</h1>"+
                   "<hr/>"+
                    "<ol>"+
                    "<li> about us </li>"+
                    "<li> contact us </li>"+
                    "</ol>";
    res.send(htmlString);
});
app.get('/api/hello',(req,res)=>{
    res.send("Hello from server");
});

//get all
app.get('/api/people',(req,res)=>{
    let fileName="data.json";
    fs.readFile(fileName,(err, data)=>{
                                        let strPeople=data.toString();
                                        let people=JSON.parse(strPeople);
                                        res.send(people);
                                    })
});

//get by Id
app.get("/api/people/:id",(req, res)=>{
    let idTobeSearched=req.params.id;
    let fileName="data.json";
    fs.readFile(fileName,(err, data)=>{
                                        let strPeople=data.toString();
                                        let people=JSON.parse(strPeople);
                                        let person=people.find((p)=>(p.id ==idTobeSearched));
                                        res.send(person);
                                    })
});


//update existing
app.put("/api/people/:id",(req, res)=>{

    //logic for updating  of existing  json object from data.json  whose id is matched
    //
});

//delete existing
app.delete("/api/people/:id",(req, res)=>{
    let idToberemoved=req.params.id;
    console.log(idToberemoved);
    //logic for deleteing json object from people whose id is matched
    //
    res.send(idToberemoved);
})

app.post("/api/login",(req, res)=>{
    let url=req.url;
    let userData=req.body;
    let fileName="credentials.json";
    fs.readFile(fileName,(err,data)=>{
        let streCredentials=data.toString();
        let credentials=JSON.parse(streCredentials);
        let userFound=credentials.find((user)=>(user.email === userData.email && user.password===userData.password))
        if(userFound){
            res.send("Welcome " + userFound.email)
        }
        else{
            res.send("Invalid User.");
        }
    })
})

app.post("/api/register",
            (req, res)=>{
                //get data from body
                let userData=req.body;
                //read all crednetials from file
                // parse into  json array
                let fileName="credentials.json";
                fs.readFile(fileName,(err,data)=>{
                    let strCredentials=data.toString();
                    let credentials=JSON.parse(strCredentials);
                    //push data received from body  into json array
                    credentials.push(userData);
                    //write complete json array into file
                    strCredentials=JSON.stringify(credentials);
                    fs.writeFile(fileName,strCredentials,
                        ()=>{
                                console.log("new user registered into credentials");
                                res.send("new user registered into credentials");
                        });
                });       
        });

app.listen(3000);
console.log("HTTP Server is listening on port 3000");

//API: Application PRograming Inteface
// some inbuilt logic
//API (local api) logic of api is executed at the same place
//where it is invoked.
//Web Service
//REST API-----
//RPC: Remote Procedural Call 
//(RMI):Remote Method Invocation
//API  (Remote api) logic of api is exeucted at remote server
//and response is transported from server to clent
// where it is invoked
//


//HTTP Request Handlers
// URL Mapping
//  / --------request callback function----sends html
// /api/hello----request callback function----send hello message string
// /api/people---request callback function ---sends JSON data 

//Tool for testing rest api
//Postman
//reflector, etc.

/*
 if(data.email ==="ravi.tambade@transflower.in" &&
       data.password==="seed123")
        {
            res.send("Welcome "+ data.email);
        }
    else{
            res.send("Invalid User.....");
        }


*/