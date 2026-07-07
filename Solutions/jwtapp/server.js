var express = require('express');
var path = require('path');
var cors = require('cors'); //(Cross-Origin Resource Sharing)cors policy for cross origin resource sharing
var bodyparser =require('body-parser');

//Custom modules

//routers
var customerRouter = require('./routers/customerRouter') 
var credentialRoutes = require('./routers/credentialrouter')
var loginRouter = require('./routers/authRouter')
var flowersRouter=require('./routers/flowersRouter')

var app = express();

//middleware
//cors policy for cross origin resource sharing

app.use(cors());
//body parser middleware for parsing json data in request body
app.use(bodyparser.json());

//static files middleware for serving static files from public directory
app.use(express.static(path.join(__dirname, 'public'))) ;

//route mapping middleware for mapping routes to routers
app.use('/api/customers',customerRouter);
app.use('/api/credentials',credentialRoutes);
app.use('/api/login',loginRouter);
app.use('/api/flowers',flowersRouter);

//start the server on port 5000
//keep listening for incoming requests and log a message when the server is ready
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});