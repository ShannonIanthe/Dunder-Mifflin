//Pull in express
const express = require('express');
//Set up API
const api = express();
api.listen(3000, () => {
    console.log('API up and running!');
});

//Set up the routes
api.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, world!')
})