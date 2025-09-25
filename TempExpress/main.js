const express = require('express')
const blogs = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000


app.use(express.static('public'));
app.use('/blog', blogs);
app.use('/shop', shop);


app.use((req,res,next) => {
  console.log(`${req.method} request for ${req.url}`);
  console.log(req.headers);
  req.saatwik = "I Am Saatwik from Middleware"
  next();
})

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


app.post('/', (req, res) => {
  console.log("Its a post request")
  res.send('Hello World!!!')
})

app.put('/', (req, res) => {
  console.log("Its a put request")
  res.send('Hello World!!')
})


app.get('/index', (req, res) => {
  console.log("INDEX")
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
res.json({ message: 'Hello from the API endpoint!', status: 'success', data: [ 2, 3, 4, 5] , info: { version: '1.0.0', author: 'Your Name' } });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
