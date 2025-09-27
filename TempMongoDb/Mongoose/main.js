import mongoose from 'mongoose'
import express from 'express';
import Todo from './models/Todo.js';

let conn = await mongoose.connect('mongodb://localhost:27017/todo')

const app = express()
const port = 3000

app.get('/', (req,res)=>{
    const todo = new Todo({
        title: "My first todo",
        desc: "I have to do something",
        isDone: false
    })
    todo.save()
    res.send('Hello World');
})


app.get('/todos', async (req,res)=>{
    let todos = await Todo.findOne({})
    res.json(todos);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})