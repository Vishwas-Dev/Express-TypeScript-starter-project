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

export const validateQueryParam = (schema : AnyZodObject) => {
    return async (req:  Request, res: Response, next: NextFunction) =>{
        try {

            await schema.parseAsync(req.query);
            console.log("Query Param is valid");
            next();

        } catch (error) {
            // 
            console.log("invalid Query Param");
        res.status(400).json({
            message: "invalid Query Param",
            success : false,
            error : error
        });
        }
    }

}

