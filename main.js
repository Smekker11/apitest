const express = require('express');
const res = require('express/lib/response');
const app = require('express')();
const PORT = 8080;

app.use(express.json())


app.post('/',(req,res) =>{
    res.status(200).send("hello world but posts");
});

app.get('/',(req,res) =>{
    res.status(200).send("hello world");
});

app.get('/gauss',(req,res) =>{
    var n = req.query.n;
    if (n==undefined){
       res.status(400).send("Provide n key for gauss sum!")
    } else { 
    n=parseInt(n)*parseInt(n)+parseInt(n); n=parseInt(n)/2;
    res.status(200).send({gauss: n});}
})



app.get('/cmmdc', (req, res) =>{
    var a=req.query.a;
    var b=req.query.b;
    if (a==undefined || b==undefined){
        res.status(400).send("Provide two numbers for cmmdc!")}
    else {
        while( b!=a){
            if( a> b){
                a=parseInt(a)-parseInt(b);
            }
            else{
                b=parseInt(b)-parseInt(a);
            } 
        }
        res.status(200).send({cmmdc: a});     
    }
})





app.listen(PORT,() => console.log(`test api on http://localhost:${PORT}`))