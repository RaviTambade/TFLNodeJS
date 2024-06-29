const express=require('express');
const routers=require('./router');
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());
 app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
    res.send("hello");
});

routers(app);
app.listen(5050,()=>{
    console.log("server is listing at port number 5050");
})