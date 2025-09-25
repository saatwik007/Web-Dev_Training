const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
    res.send({ message: 'Hello from the shop page!' }); 
});

router.get('/about', (req,res)=>{
    res.send({ message: 'Hello from the shop About page!' }); 
});

module.exports = router;