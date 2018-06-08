const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
      
    // db.collection('Todos').insertOne({
    //    text:'Something to do',
    //    completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert todo', err)
    //     }
    //  console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    db.collection('Users').insertOne({
        name:'alex',
        age: 23,
        location:'nepal'
    },(err,result)=>{
        if(err){
            return console.log('unable to insert the records', err);
        }
         
        console.log(result.ops);
    });

    db.close();
});