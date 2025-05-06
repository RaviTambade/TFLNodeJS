//import express and mongoose

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// App setup
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crm');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB')
});

// Mongoose schema and model
const customerSchema = new mongoose.Schema({
    custid: String,
    firstname: String,
    lastname: String,
    contactnumber: String,
    email: String,
    imageurl: String
});

const Customer = mongoose.model('Customer', customerSchema);

// --- REST API Routes ---

// Create customer
app.post('/api/customers', async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all customers
app.get('/api/customers', async (req, res) => {
    const customers = Customer.find({}).then(customers =>{
        console.log(customers);
        res.send(customers);
    });

});

// Get a single customer
app.get('/api/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).send({ message: "Customer not found" });
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a customer
app.put('/api/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!customer) return res.status(404).send({ message: "Customer not found" });
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a customer
app.delete('/api/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) return res.status(404).send({ message: "Customer not found" });
        res.send({ message: "Customer deleted" });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});