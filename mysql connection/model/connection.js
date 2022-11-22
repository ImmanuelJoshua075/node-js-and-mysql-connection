const mysql=require('mysql');


//mysql connection
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else{
        console.log(err);
    }
})

//module is exported
module.exports=connection;