const express = require('express')
const app = express()

let nodejsbook = {
    title : "노드",
    price : 30000
}

app.get('/', function (req, res) {
  res.json({
    say: 'Hello Son jiwoo'
    })
})

app.get('/products/1', function (req, res) {
    res.json(nodejsbook)
})

app.listen(3000)