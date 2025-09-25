const express = require('express')
const router = express.Router();

router.use((req,res,next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

router.get('/', (req,res)=>{
    res.send({ message: 'Hello from the Blog page!' }); 
});

router.get('/about', (req,res)=>{
    res.send({ message: 'Hello from the Blog About page!' }); 
});

router.get('/blogpost/:slug', (req,res)=>{
    res.send( `Hello from the Blog page! Intro to Blog ${req.params.slug} this page is rendered using slug which is just a variable which picks the name from URL` ); 
});
module.exports = router;