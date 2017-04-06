var mongo = require('mongodb').MongoClient

var size = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) console.error(err)
  var collection = db.collection('prices')

  collection.aggregate([
    {
      $match:
      {
        size: size
      }
    },
    {
      $group:
      {
        _id: 'total',
        total:
        {
          $avg: '$price'
        }
      }
    }
  ], function (err, result) {
    if (err) console.error(err)
    console.log(result[0].total.toFixed(2))

    db.close()
  })
})
