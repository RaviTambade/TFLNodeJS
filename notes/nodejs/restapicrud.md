# A simple CRUD API using Node.js and Express

CRUD stands for Create, Read, Update, and Delete, and these operations are fundamental to managing data in web applications.

### Prerequisites

- Node.js installed
- Basic knowledge of JavaScript and RESTful API principles

### Steps to Create a Simple CRUD API

1. **Initialize Your Project**

   First, create a directory for your project and initialize it with npm:

   ```bash
   mkdir my-crud-api
   cd my-crud-api
   npm init -y
   ```

2. **Install Dependencies**

   Install Express and other necessary packages:

   ```bash
   npm install express body-parser
   ```

   - `express`: The web framework.
   - `body-parser`: Middleware to parse incoming request bodies.

3. **Create the Server File**

   Create a file named `server.js`:

   ```javascript
  
  const express = require('express');
        const bodyParser = require('body-parser');

        const app = express();
        //app.use(express.json());
        app.use(bodyParser.json());

        var products=[];

        //simple get message
        app.get("/", (req , res)=>{
            res.send("Welcome to rest api server");
        });

        //Read
        //GetAll
        app.get("/api/products",(req,res)=>{
            res.send(products);
        });

        //GetById
        app.get("/api/products/:id",(req, res)=>{
            const product=products.find(element=>element.id == parseInt(req.params.id));
            if(product){
                res.send(product);
            }
        else{
            res.status(404).json({ message: "Product is nto found"});
        }
        });


        //insert
        app.post("/api/products", (req, res)=>{
            console.log("post is invoked....");
            var product=req.body;
            console.log(product);
            product.id=products.length+1;
            products.push(product);
            res.status(201).json(product);
        });

        //delete
        app.delete("/api/products/:id",(req, res)=>{
            const index=products.findIndex(element=>element.id === parseInt(req.params.id));
            if(index !== -1){
                products.splice( index, 1);
                res.status(204).end();
            }
            else{
                res.status(404).json({ message: "Product is nto found"});
            }
        })

        app.put("/api/produts/:id",(req, res)=>{

        });

        app.listen(9090,()=>{console.log("server is listening on port 9090");});

   ```

4. **Run Your Server**

   Start your server with:

   ```bash
   node server.js
   ```

   Your server will be running on `http://localhost:3000`.

5. **Test Your API**

   You can use tools like Postman or `curl` to test your endpoints:

   - **Create** a new item:

     ```bash
     curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Item 1"}'
     ```

   - **Read** all items:

     ```bash
     curl http://localhost:3000/items
     ```

   - **Read** a single item:

     ```bash
     curl http://localhost:3000/items/1
     ```

   - **Update** an item:

     ```bash
     curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Updated Item 1"}'
     ```

   - **Delete** an item:

     ```bash
     curl -X DELETE http://localhost:3000/items/1
     ```

### Explanation

- **Create (`POST /items`)**: Adds a new item to the list. Each item is assigned a unique ID.
- **Read (`GET /items` and `GET /items/:id`)**: Retrieves items. The first endpoint returns all items, while the second returns a specific item by ID.
- **Update (`PUT /items/:id`)**: Updates an existing item with new data.
- **Delete (`DELETE /items/:id`)**: Removes an item from the list.

This is a basic example. In a real application, you would use a database to persist data and add more features such as validation, authentication, and error handling.