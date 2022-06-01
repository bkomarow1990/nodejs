const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://megaadmin1337:MqnIXQYYPFSsWde5@cluster0.geepy75.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(async err => {
//     const collection = client.db("test").collection("devices");
//     await collection.insertOne({name: "IPhone XXL", price: 13371});
//     // perform actions on the collection object
//     await client.close();
// });

app.listen(3000, function() {  console.log('listening on 3000')});
app.get('/api/all', function (request, response) { 
    response.status(200).type('json');
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        const res = await collection.find().toArray();
        //console.log(res);
        client.close();

        response.json(res);
    });
 });
 app.post('/api/add', function (request, response) { 
    response.status(200).type('json');
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        const res = await collection.find().toArray();
        //console.log(res);
        client.close();

        response.json(res);
    });
 });