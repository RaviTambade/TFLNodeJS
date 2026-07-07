const { request, response } = require("express");
var credentialServices = require("../services/credentialService");

exports.addCredential=(request,response)=>{
    const {username,password}=request.body ;
    credentialServices.addCredential(username,password , (err,result)=>{
        if(err) return response.status(500).json(err);
        response.json({
            message : "credential added successfully",
            //id : "result.insertedvalue"
        })
        console.log("credential inserted successfully")
    });
};
exports.deleteCredential=(request,response)=>{
    const id = request.params.id ;
    credentialServices.deleteCredential(id,(err,result)=>{
        if(err){
            return response.status(500).json(err);
        }else{
            response.json({message: "record deleted successfully......!"});
            console.log("Data deleted....... ");
        }
    });
}
exports.getAllCredentials=(request,response)=>{
    credentialServices.getAllCredentials((err,result)=>{
        if(err){
            // console.log("hello1")
            return response.status(500).json(err)
        }
        else{
            response.json(result);
            console.log("Records fetched .....");
        }
    })
}
exports.updateCredential=(request,response)=>{
    const {username,password}=request.body
    const id = request.params.id;
    credentialServices.updateCredential(username,password,id,(err,result)=>{
        if (err){
            return response.status(500).json(err);
        }
        else{
            response.json({
                message:"record updated successfully "
            });
            console.log("record updated");
        }
    })
}