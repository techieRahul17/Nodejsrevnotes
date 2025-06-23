const express=require('express');
const app=express();

//root route
app.get('/',(req,res)=>{
    res.send("Welcome to the server!");
})

//get all prods route
app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,label:'Product 1'
        },
        {
            id:2,label:'Product 2'
        },
        {
            id:3,label:'Product 3'
        }
    ]
    res.json(products);
})

//get a single product
app.get('/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id);
    const products=[
        {
            id:1,label:'Product 1'
        },
        {
            id:2,label:'Product 2'
        },
        {
            id:3,label:'Product 3'
        }
    ];
    const product=products.find(product=>product.id===productId);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).send("Not Found");
    }
})


const port=3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})