const express = require('express')
const app = express()

app.listen(3000)

// app.get('/products/:n', function (req, res) {
//     res.json({
//         num : req.params.n
//     })
// })

//영상 클릭 주소 : https://www.youtube.com/watch?v=Pg_zyy7MzSc&t=821s
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=Pg_zyy7MzSc&t=1022s

// app.get('/:nickname', function (req, res) {
//     const param = req.params
    
//     res.json({
//         channel : param.nickname
//     })
// })

app.get('/', function (req, res) {
    
    res.json({
        
    })
})

app.get('/watch', function (req, res) {
    // const q = req.query
    // console.log(q.v)
    // console.log(q.t)

    // res.json({
    //     video : q.v,
    //     timeline : q.t
    // })
    const {v, t} = req.query
    console.log(v)
    console.log(t)
    
    res.json({
        video : v,
        timeline : t
    })
})

// app.get('/products/2', function (req, res) {
//     res.json({
//         num : 2
//     })
// })

// app.get('/products/3', function (req, res) {
//     res.json({
//         num : 3
//     })
// })

