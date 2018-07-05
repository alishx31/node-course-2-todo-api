var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
    name:{
        type: String 
    },
    email: {
      type: String,
      required: true,
      trim:true,
      min:[1,'not valid ']
    }
});

module.exports={Todo};