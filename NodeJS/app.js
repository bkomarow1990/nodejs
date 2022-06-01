const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://megaadmin1337:MqnIXQYYPFSsWde5@cluster0.geepy75.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("test").collection('Cars')//.createCollection('Cars');
  await collection.insertOne({name: 'Volvo 228'});
  // perform actions on the collection object
  console.log('DONE!!!');

  client.close();
});