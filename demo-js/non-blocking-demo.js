function first(){
    console.log("첫번째");
}
function second(){
    console.log("두번째");
}
function third(){
    console.log("세번째");
}

first();
// second();
setTimeout(second,1000);
third();
