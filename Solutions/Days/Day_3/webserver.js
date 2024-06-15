//var IOManager=require('./io')
//Request handler
//Callback function
//Rquest Listener
//HTTP request Controller

//Server Side Javascript
var fs=require('fs');
var http=require('http');
var onReceiveRequest=function(request, response){
    var url=request.url;
    console.log(url);
    console.log(url.substr(1));
    var fileName= url.substr(1) ;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            response.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    })
}
//Registered the address of the function for incomming request
var svr=http.createServer(onReceiveRequest);
svr.listen(9000);
console.log("HTTP Server is listening on port 9000");