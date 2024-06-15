const express=require('express');

const app=express();
const routes=require('./router');

//associate view engine 'ejs' with express
app.set('view engine','ejs');
routes(app);
const PORT=9000;
app.listen(PORT,()=>{
    console.log(" HTTP web server is listening on port 9000");
});