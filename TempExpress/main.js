const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/about', (req, res) => {
  res.send('Hello About');
})
app.get('/contact', (req,res)=>{
    res.send({ message: 'Hello from the Contact page!' });
})
app.get('/blog', (req,res)=>{
    res.send({ message: 'Hello from the Blog page!' }); 
})
app.get('/blog/intro-to-blog-js', (req,res)=>{
    res.send( 'Hello from the Blog page! Intro to Blog JS' ); 
})
app.get('/blog/intro-to-blog-python', (req,res)=>{
    res.send( 'Hello from the Blog page! Intro to Blog Python' ); 
})
app.get('/blog/:slug', (req,res)=>{
    res.send( `Hello from the Blog page! Intro to Blog ${req.params.slug} this page is rendered using slug which is just a variable which picks the name from URL` ); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
