import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"
import { badRequestHandler,  } from "../utilis/error/app.error.js";
// import { AppError } from "../utilis/error/app.error.js";

export const pingHandler = async  ( req: Request, res: Response, next : NextFunction) => {

 try {
    await fs.readFile("sample");
     res.status(200).json({
        message: "pong",
    })

 } catch (error) {
   

   //  throw new internalServerError("something went wrong");
    throw new badRequestHandler("Bad Request");
 }



    // console.log("request params", req.params);
    // res.status(200).json({
    //     message: "pong",
    //     success: true
    // })
    // res.send("pong");
}

