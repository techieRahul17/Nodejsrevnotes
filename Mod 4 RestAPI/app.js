const express = require('express');
const app = express();

//middleware
app.use(express.json());

let books=[
    {
        id:'1',
        title:'b1'
    },
    {
        id:'2',
        title:'b2'
    },
];

//into route
app.get('/',(req,res)=>{
    res.json({
        message:'Hello World!',
    });
});

//get all books
app.get('/book',(req,res)=>{
    res.json(
        books
    );
});

//get single book
app.get('/book/:id',(req,res)=>{
    const book=books.find(i => i.id === req.params.id);
    if(book){
        res.status(200).json(book);
    }
    else{
        res.status(404).json({
            message:'Not Found',
        });
    }
});

//post req

app.post('/add',(req,res)=>{
    const newbook={
        id:books.length+1,
        title:`Book ${books.length+1}`,
    }
    books.push(newbook)
    res.status(200).json({
        data:newbook,message:"New Book added successfully",
    });
})

//update a book
app.put('/update/:id',(req,res)=>{
    const book=books.find(i => i.id === req.params.id);
    if (!req.body) {
        return res.status(400).json({ message: "Missing request body" });
    }

    if (book) {
        book.title = req.body.title || book.title;
        res.status(200).json({
            message: `Updated ${book.title}`,
        });
    } else {
        res.status(404).json({
            message: 'Not Found',
        });
    }
});

//delete request
app.delete('/delete/:id',(req,res)=>{
    const book=books.find(i => i.id === req.params.id);
    if (!book) {
        res.status(404).json({
            message: 'Not Found',
        })
    }
    else{
        const deletedbook=books.splice(books.indexOf(book), 1);
        res.status(200).json({
            message: `Deleted ${deletedbook.length}`,
        })
    }
})
const port =3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
