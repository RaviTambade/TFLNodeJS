const express=require('express');
const expressSession=require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
const app=express();

//session configuration 
var sessionMiddlware=expressSession({
    secret:'cart',
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
});

//Middleware configuration
app.use(sessionMiddlware);

//Shopping Cart 
//Request handlers for managing Session Shopping Cart at server
app.get("/api/cart",(req,res)=>{
    if(req.session.cart){
        res.send(req.session.cart);
        res.end();
     }
     else{
        req.session.cart=[];
        res.send(req.session.cart);
        res.end();
    }
})

app.get("/api/addtocart/:id",(req,res)=>{
    req.body
    let item={"productid": req.params.id, quantity:1};
    req.session.cart.push(item);
    res.send(req.session.cart);
    res.end();
});

app.get("/api/removefromcart/:id",(req,res)=>{
    req.session.cart=req.session.cart.filter((data)=>(data.productid !=req.params.id))
    res.send(req.session.cart);
    res.end();
});

app.get("/api/checkout",(req,res)=>{
    req.session.destroy((err)=>{
        console.log( "session is destroyed");
        res.send("session is destroyed is explicitly");
        res.end();
    })
});

app.listen(9000);
console.log("server is listening on port 9000");