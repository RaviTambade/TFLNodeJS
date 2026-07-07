const { request, response } = require("express");
var flowerService = require("../services/flowerService");


// for handling requests and responses

//callback function for adding a new customer to the database
//action handler
//http handlers
//action listener
//request event receiver

exports.insertFlower=(request,response)=>{
    const {name, quantity,price}=request.body ;
    flowerService.insertFlower(name, quantity,price, (err,result)=>{
        if(err){
            return response.status(500).json(err);
        }    
        response.json({
            message : "flower added successfully",
            //id : result.insertedvalue
        })
        console.log("data inserted successfully")
    });
};

exports.deleteFlower=(request,response)=>{
    const id = request.params.id ;
    flowerService.deleteFlower(id,(err,result)=>{
        if(err){
            return response.status(500).json(err);
        }else{
            response.json({message: "flower deleted successfully......!"});
            console.log("Data deleted....... ");
        }
    });
}

exports.getAllFlowers=(request,response)=>{
    flowerService.getAllFlowers((err,result)=>{
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

exports.updateFlower=(request,response)=>{
    const {name, quantity,price}=request.body;
    const id = request.params.id;
    flowerService.updateFlower(name, quantity,price,id,(err,result)=>{
        if (err){
            console.log(err.message);
            return response.status(500).json(err);
        }
        else{
            response.json({
                message:"flower updated successfully "
            });
            console.log("record updated");
        }
    })
}