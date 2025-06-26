const express=require("express");
const path=require("path");
const app=express();

//set view engine as ejs
app.set("view engine","ejs");

//set the directory for views
app.set('views',path.join(__dirname,"views"));

const products=[
    {name:"<UNK>1",price:100},
    {name:"<UNK>2",price:100},
    {name:"<UNK>3",price:100},
];
app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products});
});
app.get('/products',(req,res)=>{
    res.render('products',{title:'Products'});
});

const port=3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});