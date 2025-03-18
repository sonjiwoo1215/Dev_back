async function f() {
    return 7; 
    // async의 첫 번째 기능
    // async 함수는 무조건 promise 객체를 반환
    // 만약 반환값이 promise가 아니면, Promise.resolve()로 감싼다.
    // return Promise.resolve(7);
}

f().then(
    function (result) {
        console.log('promise resolve :', result);
    },
    function (error) {
        console.log('promise reject :', error);
    }
);