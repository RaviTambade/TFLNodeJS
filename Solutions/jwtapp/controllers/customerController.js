const { request, response } = require("express");
var customerService = require("../services/customerService");


// for handling requests and responses

//callback function for adding a new customer to the database
//action handler
//http handlers
//action listener
//request event receiver

exports.insertCustomer=(request,response)=>{
    const {firstname, lastname,email,contactNo,city}=request.body ;
    customerService.insertCustomer(firstname, lastname,email,contactNo,city , (err,result)=>{
        if(err){
            return response.status(500).json(err);
        }    
        response.json({
            message : "customer added successfully",
            //id : result.insertedvalue
        })
        console.log("data inserted successfully")
    });
};

exports.deleteCustomer=(request,response)=>{
    const id = request.params.id ;
    customerService.deleteCustomer(id,(err,result)=>{
        if(err){
            return response.status(500).json(err);
        }else{
            response.json({message: "record deleted successfully......!"});
            console.log("Data deleted....... ");
        }
    });
}

exports.getAllCustomers=(request,response)=>{
    customerService.getAllCustomers((err,result)=>{
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

exports.updateCustomer=(request,response)=>{
    const {firstname, lastname,email,contactNo,city}=request.body;
    const id = request.params.id;
    customerService.updateCustomer(firstname, lastname,email,contactNo,city,id,(err,result)=>{
        if (err){
            console.log(err.message);
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