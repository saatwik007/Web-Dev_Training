import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;