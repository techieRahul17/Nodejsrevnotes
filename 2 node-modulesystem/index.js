 //module.exports= it is used to export a functionality from a file(module)
 //require= it is used to import functionality from module
const frstmodule=require('./frstmodule');
console.log(frstmodule.sum(10,29));
try{
    console.log("Try to div by zero");
    let res=frstmodule.divide(10,0);
    console.log(res);
} catch(error){
    console.log("error");
}

//module wrapper
/* (
     function (exports,require,module,__filename,__dirname){
         //modulecode
     }
 )
 */
 