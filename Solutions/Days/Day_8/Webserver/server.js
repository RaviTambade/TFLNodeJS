const express=require('express');
const app=express();
app.use(express.static('public'));
app.get("/",(req, res)=>{
    res.sendFile("index.html")
});
app.listen(3000,()=>{
    console.log("Front End express web server is listening on port 300");
})