var mongo = require('mongodb').MongoClient
var dbname = process.argv[2]

console.log(dbname)


mongo.connect('mongodb://localhost:27017/' + dbname, function (err, db) {
  if (err) console.error(err)
  var users = db.collection('users')

  users.update({'username': 'tinatime'}, {$set: {'age': 40}}, function (err, data) {
    if (err) console.error(err)
    console.log(data)
    db.close()
  })
})
