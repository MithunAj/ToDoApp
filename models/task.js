const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default : false
    },
    category:{
        type:String,
        required: true
    }
},{
    timestamps: true
})

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;