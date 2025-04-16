var fs= require('fs');

exports.store=function(fname, data)
{
    var strProducts=JSON.stringify(data);
    fs.writeFile(fname,strProducts,(err)=>{
                                             if(err)
                                                 {
                                                    console.log(err.message);
                                                }
                                            
                                            else
                                                   {
                                                    console.log("data is stored");
                                                   }
                                                
                                            });
}