//Controller logic

const ejs=require('ejs');


//ejs consist of View Engine

exports.home=(req, res)=>{
    ejs.renderFile('./views/index.ejs',{},{},(err, template)=>{
        if(err){
            throw err;
        }
        else{
            console.log(template);
            res.end(template);
        }
})
}

exports.aboutus=async (req, res)=>{
    
    ejs.renderFile('./views/about.ejs',{},{},(err, template)=>{
        if(err){
            throw err;
        }
        else{
            res.end(template);
        }
    })
}

exports.contactus=(req, res)=>{
    ejs.renderFile('./views/contact.ejs',{},{},(err, template)=>{
        if(err){
            throw err;
        }
        else{
            res.end(template);
        }
    })
}
