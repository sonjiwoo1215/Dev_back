const express = require('express')
const app = express()
app.listen(3000)

const fruits = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'blueberry'},
    {id: 4, name: 'pear'},
]

app.get('/fruits', (req,res)=>{
    res.json(fruits)
})

app.get('/fruits/:id', (req,res)=>{
    let id = req.params.id
    // let fruit = fruits[id]
    var findFruit = 
        fruits.find(f => f.id == id)
        //fruits 배열 안에 있는 객체 중, id값이 params.id와 같은 객체

    // fruits.forEach((fruit)=>{
    //     if(fruit.id == id){
    //         findFruit = fruit
    //     }
    // })

    if(findFruit)
        res.json(findFruit)
    else{
        res.status(404).send(
            "전달주신 id로 저장된 과일 없다"
        )
    }
    // res.json(findFruit)
})