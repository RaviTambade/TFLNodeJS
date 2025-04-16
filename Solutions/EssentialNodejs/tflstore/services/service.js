
var repo= require('./repository');

exports.save=function(fileName, data)
{
    repo.serialize(fileName,data);   
}

