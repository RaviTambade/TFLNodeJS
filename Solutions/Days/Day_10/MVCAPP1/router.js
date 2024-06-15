const homeController=require('./controllers/homecontroller');

module.exports=function(app){
    app.get('/',homeController.home);
    app.get('/aboutus',homeController.aboutus);
    app.get('/contact',homeController.contactus);
}