import {Sequelize} from "sequelize";
import  express  from "express";
import { listUsers, unsafeGet, userAdd } from "./db.main.js";
import dotenv from "dotenv";
import { cmmdc, gauss } from "./api-methods.main.js";


const app = express();
dotenv.config();
const PORT = 8080;

export const AuthAPI = (req) => {
    if(req.query.token!=process.env.TOKEN){
        throw new Error("Provided API DB Access key " + JSON.stringify(req.query) + " is invalid.")
    }
}


app.use(express.json())

app.get('/users*', unsafeGet);
  
  app.post('/users/add', userAdd);
  
  app.post('/users/list', listUsers);

app.post('/',(req,res) =>{
    res.status(200).send("hello world but posts");
});

app.get('/',(req,res) =>{
    res.status(200).send("hello world");
});

app.get('/gauss', gauss)



app.get('/cmmdc', cmmdc)


app.listen(PORT,() => console.log(`test api on http://localhost:${PORT}`))