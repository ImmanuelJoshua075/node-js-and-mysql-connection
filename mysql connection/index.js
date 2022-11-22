const express=require('express');

//import module for connection
const connection=require('./model/connection');

//import the user module
const productRoute=require('./routes/product')

const app=express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//first page
app.get('/',(req,res)=>{
    res.json({message:"Hello Friends"})
})
app.use('/product',productRoute);

module.exports=app;