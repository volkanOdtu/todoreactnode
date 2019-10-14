const express = require('express');
//const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();



const app = express();
const port = process.env.port || 5000 ;

//middlewares
app.use(cors());
//app.use(bodyparser.json());
app.use(express.json());//this is going to allow to parse JSON

const uri = process.env.ATLAS_URI || "mongodb://admin:gunfer510@ds235078.mlab.com:35078/heroku_btn6zz9h";


let todo = require('./models/todo.model');

try {
    mongoose.connect(uri ,{useNewUrlParser:true ,useCreateIndex:true });   
} 
catch (error) {console.log(error);}


try{
    const connection = mongoose.connection;

    connection.once('open',() => {
        console.log("Mongoose db connection established successfully");
    } );
 } 
catch (error) {}

app.get('/', (req ,res ) => {
    console.log('get deyiz');
    try { 
        todo.find().then(todos =>res.json(todos))
              .catch(err=>res.status(400).json('Error:' + err ))  ;            
    }
    catch (err) {
        res.json({message: err.message});
    }

  });

app.delete('/' ,(req ,res ) => {
    const id = req.body.id;
    console.log('delete deyiz');

    try {
        
        todo.deleteOne({id : id }).then(()=>res.json('Todo item deleted'))
                            .catch( err=>res.status(400).json('Error:' + err ) )

    } catch (err) {
        res.json({message: err});
    }
});

app.post('/', (req ,res ) => {
    const id = req.body.id;
    const item = req.body.item;
    const completed = req.body.completed;

    console.log('post dayiz');

    console.log(id);
    console.log(item);
    console.log(completed);

    const todoInstance = new todo({id:id ,item:item ,completed:completed });

    try { 
    
        todoInstance.save().then(()=>res.json('Todo item added'))
                        .catch(err =>res.status(400).json('Error:' + err ) );
    }
    catch (err) {
        res.json({message: err});
    }    

  });
  


app.listen(port ,()=>{
    console.log(`Server is running on port: ${port}`);
});
