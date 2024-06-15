const dal=require('../models/dal');

//Controller logic
exports.myliking=(req, res)=>{
    let model=dal.getPersonDetails();
    // send model  and  View to View Engine
    res.render('../views/profile',model);
    //res.render('../views/liking',person);
}
