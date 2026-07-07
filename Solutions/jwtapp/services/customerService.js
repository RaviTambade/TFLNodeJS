
var customerRepo=require('../repositories/customerrepository');

exports.insertCustomer=(firstname, lastname,email,contactNo, city,result)=>{
    customerRepo.insertCustomer(firstname, lastname,email,contactNo, city,result);
};

exports.deleteCustomer=(id,result)=>{
    customerRepo.deleteCustomer(id,result);
}

exports.getAllCustomers=(result)=>{
    // console.log("hello2");
    customerRepo.getAllCustomers(result);
    // console.log("hello2");
}

exports.updateCustomer=(firstname, lastname,email,contactNo, city,id,result)=>{
    customerRepo.updateCustomer(firstname, lastname,email,contactNo, city,id,result);
}