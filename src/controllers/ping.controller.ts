import { Request, Response } from "express";

export const pingHandler = (req: Request, res: Response) => {

    console.log("request params", req.params);


    res.status(200).json({
        message: "pong",
        success: true
    })
    // res.send("pong");
}

