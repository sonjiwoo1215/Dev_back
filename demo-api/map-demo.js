const express = require('express')
const app = express()
app.listen(1234)

// app.get('/:id', function (req, res) {
//   let {id} = req.params

//   id = parseInt(id)


//     if(db.get(id) == "undefined"){
//         res.json({
//             message : "없는 상품이다"
//         })
//     }
//     else{
//         res.json({
//             id : id,
//             productName : db.get(id)
//         })
//     }
    
// })

app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    res.json(db.get(id))

    if(db.get(id) == "undefined"){
        res.json({
            message : "없는 상품이다다"
        })
    }
    else{
        product = db.get(id)
        // product.id = id
        product["id"] = id

        res.json(product)
    }
  })


let db = new Map()

let notebook = {
    productName : "NoteBook",
    price : 30000
}

let cup = {
    productName : "Cup",
    price : 3000
}

let chair = {
    productName : "Chair",
    price : 10000
}

let poster = {
    productName : "Poster",
    price : 20000
}


db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))