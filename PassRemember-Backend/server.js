const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


// Database Name
const dbName = 'PassRememberDB';


const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors())



console.log(process.env.MONGO_URI);

client.connect();
  console.log('Connected successfully to server');
//   GET ALL PASSWORD
  app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('password');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    res.json(findResult);
})
// SAVE ALL PASSWORD
  app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('password');
    const findResult = await collection.insertOne(password);
    console.log('Found documents =>', findResult);
    res.json({success: true,result: findResult});
})

// DELETE ALL PASSWORD
  app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('password');
    const findResult = await collection.deleteOne(password);
    res.json({success: true,result: findResult});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})