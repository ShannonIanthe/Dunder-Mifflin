//Pull in express
const express = require('express');
//Set up API
const api = express();
api.use(express.static(__dirname + '/public'));


api.listen(3000, () => {
    console.log('API up and running!');
});

//Set up the routes
// api.get('/', (req, res) => {
//     console.log(req);
//     res.json('Hello, world!')
// })

//Express "static"
// api.use((req, res, next) => {
//     console.log('Hello');
// });
