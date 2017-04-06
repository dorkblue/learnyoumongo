var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetedAge = argv[2]

// console.log(argv)

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  // console.log('access the db success!')
  var parrots = db.collection('parrots')

  parrots.find({
    age: { $gt: +targetedAge}
  }).toArray(function (err, documents) {
    if (err) return console.error(err)
      console.log(documents)
  })

  // parrots.remove({})
  db.close()
})
