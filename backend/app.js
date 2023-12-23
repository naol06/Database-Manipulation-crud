const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt= require('bcrypt')
const app = express()
const port = 8081

const db=mysql.createConnection({
    database:"signup",
    host:"localhost",
    user:"root",
    password:""
})
db.connect((err)=>{
    if(err)throw err;
    else console.log("database is connected");
})
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));
app.use(cors());
app.use(express.static('public'));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})

app.post('/addemployee',upload.single('image'),(req,res)=>{
    const{name,email,password,salary,address}=req.body
    const sql=`INSERT INTO employee (name,email,password,salary,address,image) VALUES(?)`
    bcrypt.hash(password.toString(),10,(err,hash)=>{
                if(err) console.log("error in hashing"+err);
        const values=[name,email,hash,salary,address,req.file.filename]
        db.query(sql,[values],(err,result)=>{
            if(err)console.log("error in query"+err);
            else return res.json({status:"success",Result:result})
        })
    })
})
app.get('/getdata',(req,res)=>{
    const sql=`SELECT * FROM employee`
    db.query(sql,(err,result)=>{
        if(err)console.log("error in query"+err);
        else return res.json({status:"success",Result:result})
    })
})
app.get('/read/:id',(req,res)=>{
    const id=req.params.id;
    const sql =`SELECT * FROM employee WHERE id=?`;
    db.query(sql,[id],(err,result)=>{
        if(err)console.log("error in query"+err);
        else return res.json({status:"success",Result:result}) 
    })
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const sql =`DELETE  FROM employee WHERE id=?`
    db.query(sql,[id],(err,result)=>{
        if(err)console.log("error in query"+err);
        else return res.json({status:"success",Result:result,alert: 'user is deleted!!!'}) 
   
        res.send(alert); })
   
})
app.get('/datacome/:id',(req,res)=>{
    const id=req.params.id;
    const sql =`SELECT * FROM employee WHERE id=?`;
    db.query(sql,[id],(err,result)=>{
        if(err)console.log("error in query"+err);
        else return res.json({status:"success",Result:result}) 
    })
})
app.put('/update/:id',(req,res)=>{
    const{name,email,salary,address}=req.body;
    const id=req.params.id;
    const sql=`UPDATE employee SET name=?,email=? ,salary=?, address=? WHERE id=?` 
    db.query(sql,[name,email,salary,address,id],(err,result)=>{
        if(err)console.log("error in query"+err);
        else return res.json({status:"success",Result:result}) 
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))