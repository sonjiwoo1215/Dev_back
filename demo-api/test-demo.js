const express = require('express')
const app = express()

app.get('/test', function (req, res) {
    res.send('Test')
})

app.get('/test/1', function (req, res) {
    res.send('One')
})


app.listen(3000)