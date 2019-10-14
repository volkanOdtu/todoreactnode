const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({    
        id:{ type:String ,required:true },
        item:{ type:String ,required:true },
        completed:{ type:Number ,required:true }
    }
);

const Todo = mongoose.model('Todo' ,todoSchema);

module.exports= Todo;
