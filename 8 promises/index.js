 //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

 function delayfn(){
    return new Promise(resolve => setTimeout(resolve, 1000));
 }
 console.log("promise starts");
 delayfn(2000).then(()=>console.log("Done after 2 minutes"));
 console.log("promise ends");

 function dividefn(n1,n2){
     return new Promise((resolve,reject)=>{
         if(n2===0){
             reject("Cannot do");
         }
         else{
             resolve(n1/n2);
         }
     });
 }
 dividefn(10,5).then(result=>console.log(result)).catch(err=>{
     console.log(err);
 });