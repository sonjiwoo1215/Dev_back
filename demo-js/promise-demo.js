
// promise "객체" : 무조건 약속을 지키는 객체

let promise = new Promise(function(resolve, reject){ // 소환
    // executor : 이 친구가 지켜낼 약속 (할 일)
    setTimeout(()=> resolve('완료'),3000);
});

// promise 기본 메소드 : promise가 할 일 다 하고(=약속 다 지키고) 호출해야 하는 함수
promise.then(
    function(result){},
    function(error){}
);