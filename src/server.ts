import  express  from 'express';
import {  serverConfig } from './config/index.js';
const app = express();

// const PORT = 3000;

app.get('/ping', (req, res)=>{

    res.send("pong");
    console.log("pong");
});

console.log("enviromental variable loaded");

app.listen(serverConfig.PORT, () =>{             
    console.log(` server is running on this http//:localhost:${serverConfig.PORT}`);
  
    
})