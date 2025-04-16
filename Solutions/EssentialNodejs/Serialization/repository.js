 
var fileManager=require('./filestore');



exports.serialize=function (fileTitle, data)
{
    fileManager.store(fileTitle, data);
}
 