const express=require('express');
const connection=require('../model/connection');

const router=express.Router();


//post method create file
router.post('/create',(req,res,next)=>{
    let product=req.body;
    var query= "insert into product (name,description,price) values(?,?,?)";
    connection.query(query,[product.name,product.description,product.price],(err,result)=>{
        if(!err){
            return res.status(200).json({message:"Product Added successfully"});
        }
        else{
            return res.status(404).json(err);
        }
    })
})

//get method read a file
router.get('/read',(req,res,next)=>{
    var query="select*from product";
    connection.query(query,(err,result)=>{
        if(!err)
    {
        return res.status(200).json(result);
    }
    else{
        return res.status(404).json(err);
    }
    })
})

//patch method update the file
router.patch('/update/:id',(req,res,next)=>{
    const id=req.params.id  ;
    let product=req.body;
    var query="update product set name=?,description=?,price=? where id=?";
    connection.query(query,[product.name,product.description,product.price,id],(err,result)=>{
        if(!err){
            if(result.affectedRows==0){
                return res.status(404).json({message:"Product id is does not found"})
            }
            return res.status(200).json({message:"Product id is updated Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//delete method
router.delete('/delete/:id',(req,res,next)=>{
    const id=req.params.id;
    var query="delete from product where id=?";
    connection.query(query,[id],(err,result)=>{
        if(!err){
            if(result.affectedRows==0)
            {
                return res.status(404).json({message:"Product id does not found"})
            }
            return res.status(200).json({message:"Product id deleted successfully"})
        }
        else{
            return res.status(500).json(err);
        }
    })
});

module.exports=router;