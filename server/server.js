var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var  {Todo}  = ('./models/todo');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   var todo = new Todo({
       name: req.body.text
   });
   todo.save().then((doc)=>{
     res.send(doc);
   },(e)=>{
       res.status(400).send(e);
   });
   var contentType = response.getHeader('content-type');
   console.log(contentType);
});

app.listen(8080,()=>{
    console.log('port open in 8080');

});

