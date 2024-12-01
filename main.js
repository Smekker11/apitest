import {Sequelize} from "sequelize";
import  express  from "express";
const app = express();


import { User } from "./models/users.model.js"  // Import the User model
const PORT = 8080;


app.use(express.json())

app.get('/users*', (req,res) =>{
  res.status(400).send("GET method not supported while interacting with DB!");
})

app.post('/users/add',async (req,res) =>{
    await User.create(req.body);
    res.status(200).send("created user:" + JSON.stringify(req.body));
});

app.post('/users/list', async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  });

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