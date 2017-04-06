var json = require('./test-json.json')

var strJson = JSON.stringify(json)

var jayson = {
  firstName: 'tom',
  lastName: 'lee'
}

var strJayson = JSON.stringify(jayson)

console.log(typeof jayson)
console.log(typeof strJayson)
