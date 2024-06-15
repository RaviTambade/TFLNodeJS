const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
let jwtSecretKey="transflower_secret";
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//request-response processing
//REST API handlers
// Secure REST API
app.get("/api/orders",(req, res)=>{
    let authKey="Authorization";
    let token =req.header(authKey);
    let extractedData=jwt.verify(token,jwtSecretKey)
    if(extractedData.client =="ravi.tambade@transflower.in"){
        console.log(" procesing request for /api/ordres......");
        let myOrders=[
            { "orderid":543, "date": "30/9/2022", total:6000, status:"intransit"},
            { "orderid":544, "date": "21/9/2022", total:67500, status:"processed"},
            { "orderid":545, "date": "17/9/2022", total:23000, status:"processed"},
            { "orderid":546, "date": "3/8/2022", total:65000, status:"processed"},
            { "orderid":547, "date": "12/7/2022", total:2200, status:"processed"},
            { "orderid":548, "date": "26/12/2022", total:16000, status:"processed"},
        ];
        res.status(200).send(myOrders);
    }
    else{
        res.status(403).send("unauthorized request");
    }
});

app.post("/api/login",(req, res)=>{
    let user=req.body;
    if(user.email==="ravi.tambade@transflower.in" &&
        user.password==='seed'){
            //define claim
            let data={
                     time:Date(),
                     client:user.email     
            };
            console.log(data);
            let token=jwt.sign(data,jwtSecretKey);
            console.log(token);
            res.status(200).send(token);
        }
        else{
            res.status(403).send("Invalid User");
        }
});

let PORT=8888;
app.listen(PORT,()=>{
    console.log(`Secure Server is listening on ${PORT} ....`);
});