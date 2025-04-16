var svc=require('./service');
var fileName="tfl.json";

function  persist(fName, data){
    svc.save(fName,data);
}

var products=[
    {"id":1, "title":"gerbera"},
    {"id":2, "title":"rose"},
    {"id":3, "title":"lotus"},
];

persist(fileName, products);