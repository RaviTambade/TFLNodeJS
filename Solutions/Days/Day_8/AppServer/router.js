var authController=require('./controllers/authcontroller');
var userController=require('./controllers/usercontroller');

//HTTP request mapping is done using routing technique
module.exports=function(app){
    app.route('/api/tasks')
            .get(userController.getAll)
            .post(userController.insert)
            .put(userController.update)
            .delete(userController.remove);
    app.route('/api/login')
            .post(authController.login);
    app.route('/api/register')
            .post(authController.register);
};



//Single Responsibility Principle
//Loosely Coupled , highly Cohesive  ------SOC
//DRY : Do not repeat your self

//Hollywood Principle: Don't call me,. I will call you.
