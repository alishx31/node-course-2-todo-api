const {MongoClient,ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('unable to connect to MongoDB server',err);
    }
    console.log('Connected to MongoDB server');
      
    db.collection('Users').find({name:'alex'}).toArray().then((docs)=>{
     console.log('Users');
     console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch todos',err);
    });

    // db.close();
});