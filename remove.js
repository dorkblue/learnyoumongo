var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
var colName = process.argv[3]
var id = process.argv[4]

mongo.connect(url, function (err, db) {
  if (err) console.error(err)
  var collection = db.collection(colName)

  collection.remove({'_id': id}, function (err, data) {
    if (err) console.error(err)
    console.log(data)
    db.close()
  })
})
