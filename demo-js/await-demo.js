// async의 두 번째 기능
// promise 객체가 일이 끝날 때까지 기다릴 수 있는 공간을 제공한다.

async function f(){
    let promise1 = new Promise(function(resolve,reject){
        setTimeout(()=> resolve("1 "),3000);
    });

    // promise 객체가 일 다 할 때까지 기다려준다.
    let result1 = await promise1;
    console.log(result1);

    let promise2 = new Promise(function(resolve,reject){
        setTimeout(()=> resolve("2 "+result1),3000);
    });

    let result2 = await promise2;
    console.log(result2);

    let promise3 = new Promise(function(resolve,reject){
        setTimeout(()=> resolve("3 "+result2),3000);
    });

    let result3 = await promise3;
    console.log(result3);
};

f();