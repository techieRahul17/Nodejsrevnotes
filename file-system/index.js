//getting the current entire file system
const fs=require("fs");
//getting the path too
const path=require("path");

//creating a data folder
const dataFolder=path.join(__dirname,"data");
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Created Directory");
}

//creating and writing a file
const filepath=path.join(dataFolder,"data");
fs.writeFileSync(filepath,"Hello this is Rahul from 5th module");
console.log("File created Successfully");

//Read content from a file
const readFileContent=fs.readFileSync(filepath,"utf8");
console.log(readFileContent);

//Add another file here
fs.appendFileSync(filepath,"\nI am maintaining a streak in Github now\n");
console.log("New file content added");
fs.appendFileSync(filepath,readFileContent);
console.log("Read file content added");

//async way of creating a file
const asyncfilepath=path.join(dataFolder,"asyncfilepath.txt");
fs.writeFile(asyncfilepath,readFileContent,(err)=>{
    if(err){
        throw err;
    }
    console.log("Read file content added");
    fs.readFile(asyncfilepath,'utf8',(err,data)=>{
        if(err){
            throw err;
        }
        console.log("Async File content:",data);
        fs.appendFile(asyncfilepath,readFileContent,(err)=>{
            if(err){
                throw err;
            }
            console.log("Async File content added");
        })
    })
});