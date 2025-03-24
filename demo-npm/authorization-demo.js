var jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
app.listen(process.env.PORT)

app.get('/jwt', function (req, res) {
    // var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);

    const token = jwt.sign({
        userName: 'sonjiwoo'
    }, process.env.PRIVATE_KEY, {
        expiresIn: '1m',
        issuer: 'admin'
    });

    res.cookie("jwt", token,{
        httpOnly: true
    })
    res.send('토큰 발행')
})

app.get('/jwt/decoded', function (req, res) {
    let receivedJwt = req.headers["authorization"]
    console.log('우리가 req로 전달받은 jwt : ', receivedJwt)
    var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

    // 유효기간이 지났어
    // 500에러(가 난다고해서 서버가 꺼지진 않았지만)를 낼 게 아니고
    // 예외(개발자가 생각하지 못한 에러) 처리
    // - 유효기간이 지난 토큰 => res.'로그인(인증) 세션(유지되는 상태)이 만료되었습니다. 다시 로그인 하세요.'

    res.send(decoded)
})

