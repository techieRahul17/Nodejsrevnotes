//callbacks are functions which are passed as args to other funcs.(when we do https request we use this)
//callback hell= callback inside another callback is callback hell

const fs=require('fs');

function person(name,callbackFn){
    console.log("Hello",name);
    callbackFn();
}
function address(){
    console.log("Address:",address);
}
person("test",address);

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
    }
})