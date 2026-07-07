const db = require("../config/db");

class customer {
    constructor(id,firstname, lastname,email,contactNo, city){
        this.id = id ;
        this.firstname =firstname,
        this.lastname = lastname,
        this.email = email ,
        this.contactNo = contactNo, 
        this.city = city
    }
}
module.exports=customer ;
