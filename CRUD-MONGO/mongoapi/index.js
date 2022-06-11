const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://megaadmin1337:MqnIXQYYPFSsWde5@cluster0.geepy75.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(async err => {
//     const collection = client.db("test").collection("devices");
//     await collection.insertOne({name: "IPhone XXL", price: 13371});
//     // perform actions on the collection object
//     await client.close();
// });
var cors = require('cors');

app.use(cors()); // Use this after the variable declaration
app.listen(3001, function() {  console.log('listening on 3000')});
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use((error, req, res, next) => {
    console.log("Error Handling Middleware called")
    console.log('Path: ', req.path)
    next() // (optional) invoking next middleware
  })
app.get('/api/all', function (request, response) { 
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        const res = await collection.find().toArray();
        //console.log(res);
        
        response.status(200).type('json');
        response.json(res);
        //client.close();
    });
 });
 app.get('/api/getById', function (request, response) { 
    response.status(200).type('json');
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        const res = await collection.find({_id : ObjectId(request.query.id)}).toArray();
        //console.log(res);
        
        response.json(res);
        //client.close();
    });
 });

 app.post('/api/add', function (request, response) { 
    response.status(200).type('json');
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        //const res = await collection.find().toArray();
        //console.log(res);
        await collection.insertOne(request.body);
        response.status(200).end();
    });
 });
 app.delete('/api/delete', function (request, response) { 
    response.status(200).type('json');
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        await collection.deleteOne({_id : ObjectId(request.query.id)});
        response.status(200).end();
    });
 });

 app.post('/api/update', function (request, response) { 
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        console.log(request.body.name);
        await collection.updateOne({_id : ObjectId(request.query.id)},{$set: {name: request.body.name, price: request.body.price}});
        response.status(200).end();
    });
 });