
var credential=require('../repositories/credential');

exports.addCredential=(username,password,resut)=>{
    credential.insertCredential(username,password,resut);
};

exports.deleteCredential=(id,result)=>{
    credential.deleteCredential(id,result);
}

exports.getAllCredentials=(result)=>{
    credential.getAllCredentials(result);
}

exports.updateCredential=(username,password,id,result)=>{
    credential.updateCredential(username,password,id,result);
}