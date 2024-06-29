var userController=require('./Controller/userController');
// route mapping
module.exports=function(app){
    app.route('/task')
              .get(userController.getAll)
              .post(userController.insert)
              .put(userController.update)
              .delete(userController.delete);  
};