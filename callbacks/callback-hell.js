const fs=require('fs');
fs.readFile('input.txt','utf8',(err,data)=> {
    if(err){
        console.log(err);
        return;
    }
    const modifyFileData=data.toUpperCase();
    fs.writeFile('output.txt',modifyFileData,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Successfully written");
        fs.readFile('output.txt','utf8',(err,data)=> {
            if(err){
                console.log(err);
                return;
            }
            console.log("Successfully written2");
        })
    })
})