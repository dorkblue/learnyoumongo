var mongo = require('mongodb').MongoClient
var age = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) console.error(err)
  var parrots = db.collection('parrots')

  parrots.count({'age': {$gt: +age}}, function (err, count) {
    {
      if (err) console.error(err)
      console.log(count)
      db.close()
    }
  })
})
