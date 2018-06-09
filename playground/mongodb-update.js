const {MongoClient,ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('unable to connect to MongoDB server',err);
    }
    console.log('Connected to MongoDB server');
      
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b1b647094d732cc65e06e2d')
    },{ $set: {
        name:'hellosir'
    },
    $inc:{
        age:1
    }
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
});

    // db.close();
});