
var flowersRepo=require('../repositories/flowersRepo');

exports.insertFlower=(name, quantity,price,result)=>{
    flowersRepo.insertFlower(name, quantity,price,result);
};

exports.deleteFlower=(id,result)=>{
    flowersRepo.deleteFlower(id,result);
}

exports.getAllFlowers=(result)=>{
    
    flowersRepo.getAllFlowers(result);

}

exports.updateFlower=(name, quantity,price,id,result)=>{
    flowersRepo.updateFlower(name, quantity,price,id,result);
}