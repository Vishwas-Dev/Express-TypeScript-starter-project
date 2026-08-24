// this file contains all the configuration logic for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
    PORT : Number;
}

 function loadEnv(){
    dotenv.config();
}
loadEnv();

export const serverConfig : ServerConfig = {
 PORT : Number(process.env.PORT ) || 3001
};