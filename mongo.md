# MongoDB

##  Introduction to MongoDB
- Create new DB if not exist `use <DataBase Name>`
- Create a collection and insert document into it.
```
db.<collection name>.insert(document)
Example:
db.dishes.insert({ name: "Uthappizza", description: "Test" });
```
- to print the documents in the collection
`  db.dishes.find().pretty();`  

## A Simple Node-MongoDB Application
``` javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

});
```
> Import methods: dropCollection, insertOne, insert
