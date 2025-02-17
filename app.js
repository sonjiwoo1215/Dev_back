const express = require('express')
const app = express()
const port = 1234


app.get('/', (req,res)=>{
    res.send('Hello jiwoo')
})

app.use(express.json())

app.post('/test', (req,res)=>{
    console.log(req.body.message)
    res.send(req.body.message)
})

app.get('/test', (req, res) => {
    res.send('Get');
});


app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})