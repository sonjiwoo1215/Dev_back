const obj1 = {}
const obj2 = {message: "안녕"}
const num = 1
const str1 = "one" 
const str2 = "" //문자열도 객체

// console.log(Object.keys(obj1).length === 0)
// console.log(Object.keys(obj2).length === 0)


// console.log(Object.keys(num).length === 0)
// console.log(Object.keys(str1).length === 0)
// console.log(Object.keys(str2).length === 0)

function isEmpty(obj){
    // if(obj.constructor === Object) 
    if(Object.keys(obj).length === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEmpty(obj1))