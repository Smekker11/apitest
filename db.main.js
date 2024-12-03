import { AuthAPI } from "./main.js";
import { User } from "./models/users.model.js"  // Import the User model
import util from 'util';


export const unsafeGet = (req,res) =>{
    res.status(403).send("GET method not supported while interacting with DB!");
};

export const userAdd = async (req,res) =>{
    try{
    AuthAPI(req);
     await User.create(req.body);
     res.status(200).send("created user:" + JSON.stringify(req.body));
    } catch (err) {
        console.warn(err.message);
        res.status(500).json(ApiErrDetails);
    }
};

export const listUsers = async (req,res) =>{
    try {
        AuthAPI(req);
        const users = await User.findAll();
        res.status(200).json(users);
      } catch (err) {
        console.warn(err.message);
        res.status(500).json(ApiErrDetails);
      }
};

const ApiErrDetails = [
    { 
        "error": 'Catastrophic Failure!',
        "message": err.message
    },
    {"stack-trace": util.inspect(err, { showHidden: true, depth: 0 })}
];