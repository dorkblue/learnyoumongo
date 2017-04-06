var mongo = require('mongodb').MongoClient
var argv = process.argv
var firstName = argv[2]
var lastName = argv[3]

var jayson = {
  firstName: firstName,
  lastName: lastName
}

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  var docs = db.collection('docs')

  docs.insert(jayson, function (err, data) {
    if (err) console.error(err)
    console.log(JSON.stringify(jayson))
    db.close()
  })
})
