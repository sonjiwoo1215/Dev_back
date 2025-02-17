const express = require('express')
const app = express()

app.listen(1234)


let youtuber1 = {
    channelTitle : "쥬쥬",
    sub : "3명",
    videoNum : "2개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "테오",
    sub : "54.8만명",
    videoNum : "726개"
}

let db = new Map()
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)


app.get('/youtuber/:id',function(req,res){
    let {id} = req.params
    // console.log(id)
    id = parseInt(id)

    const youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            message : "유튜버 찾을 수 없다"
        })
    }else{
        res.json(youtuber)
    }
})

app.use(express.json())

app.get('/youtubers', (req,res)=>{
    res.json({
        message : "test"
    })
})

app.post('/youtuber', (req,res)=>{
    console.log(req.body)

    db.set(id++, req.body)

    res.json({
        message: `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다.`
    })
})