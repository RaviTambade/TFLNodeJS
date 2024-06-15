const homeController=require('./controllers/homecontroller');

module.exports=function(app){
    app.get('/',homeController.myliking)
}