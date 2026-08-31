import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod/v3";

export const validateRequestBody = (schema : AnyZodObject) => {
    return async (req:  Request, res: Response, next: NextFunction) =>{
        try {

            await schema.parseAsync(req.body);
            console.log("request body is valid");
            next();

        } catch (error) {
            // 
            console.log("invalid req body");
        res.status(400).json({
            message: "invalid req body",
            success : false,
            error : error
        });
        }
    }

}

