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

app.get('/youtubers', (req,res)=>{
    var youtubers = {}

    if(db.size !== 0){
       db.forEach(function(value,key){
           youtubers[key] = value
       });
       res.json(youtubers)
    }else{
        res.status(404).json({
            message : "조회할 유튜버가 없다"
        })
    }
})

app.get('/youtubers/:id',function(req,res){
    let {id} = req.params
    // console.log(id)
    id = parseInt(id)

    const youtuber = db.get(id)
    if(youtuber == undefined){
        res.status(404).json({
            message : "유튜버 찾을 수 없다"
        })
    }else{
        res.json(youtuber)
    }
})

app.use(express.json())

app.post('/youtubers', (req,res)=>{
    const channelTitle = req.body.channelTitle
    if(channelTitle){
        db.set(id++, req.body)

        res.status(201).json({
            message: `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다.`
    })
    }else{
        res.status(400).json({
            message: "요청값을 제대로 보내주세요"
        })
    }

    
})

app.delete('/youtubers/:id', (req,res)=>{
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id); 
    if(youtuber){
        const channelTitle = youtuber.channelTitle
        db.delete(id)
    
        res.json({
            message : `${channelTitle}님, 잘가요`
        })
    }else{
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버다` 
        })
    }
})



app.delete('/youtubers', (req,res)=>{

    if(db.size >= 1){
        db.clear()
        res.json({
            message : "전체 유튜버 삭제"
        })      
    }else{
        res.status(404).json({
            message : "삭제할 유튜버 없음"
        })
    }


})

app.put('/youtubers/:id', (req,res)=>{
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id); 
    var oldTitle = youtuber.channelTitle
    if(youtuber == undefined){
        res.status(404).json({
            message : `요청하신 ${id}번은 없는 유튜버다` 
        })
    }else{
        var newTitle = req.body.channelTitle

        youtuber.channelTitle = newTitle
        db.set(id,youtuber)

        res.json({
            message : `${oldTitle}님, 채널명이 ${newTitle}로 수정되었습니다.` 
        })
    }
})