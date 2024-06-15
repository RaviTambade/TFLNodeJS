//Model
class Product{
    //Parameterized constructor
    constructor(id, title, description, unitprice, quantity){
        this.id=id;
        this.title=title;
        this.description=description;
        this.unitprice=unitprice;
        this.quantity=quantity;
    }

    display(){
        console.log( "Id="+this.id);
        console.log( "Title="+this.title);
        console.log( "Description="+this.description);
        console.log( "Unit Price="+this.unitprice);
        console.log( "Quantities Available="+this.quantity);
    }
};

//Repository Manager
//Collection

class ProductManager{
    constructor(){
        this.products=[];
    }
    
    insert(product){
        this.products.push(product);
    }

    update(id, productTobeUpdated){
        this.products=products.filter((product)=>(product.id !==id));
        this.product.push(productTobeUpdated);
    }

    getAll(){
        return this.products;
    }

    getById(id){
        let foundProduct=this.products.find((product)=>(product.id ==id));
        return foundProduct;
    }

    delete(id){   
        this.products=products.filter((product)=>(product.id !==id));
        return this.products;
    }
}


//Controller
class ProductController{
    //constructor Dependency Injection
    constructor(mgr){
        this.repoManager=mgr;
    }

    get(){
        return this.repoManager.getAll();
    }

    getById(id){
        return this.repoManager.getById(id);
    }

    post(product){
        this.repoManager.insert(product);
    }

    put(id,product){
        this.repoManager.update(id,product);
    }

    delete(id){
        this.repoManager.remove(id);
    }
}

let mgr=new ProductManager();

let controller=new ProductController(mgr);

let flower1=new Product(12,"Gerbera","Wedding Flower",12,512500);
let flower2=new Product(13,"Rose","Valentine Flower",26,5564);
let flower3=new Product(14,"Lotus","Worship Flower",39,87000);
let flower4=new Product(15,"Marigold","Festival Flower",4,87900);

controller.insert(flower1);
controller.insert(flower2);
controller.insert(flower3);
controller.insert(flower4);

console.log("Code execution....");
let allProducts=controller.get();

//View 
console.log(allProducts);
allProducts.map((flower)=>{
    flower.display()
});
console.log("End of Node JS App Execution ProductDBManager");