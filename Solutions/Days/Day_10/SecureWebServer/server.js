const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(8888, () => {
    console.log("server is running on port 8888....");
});