import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.config.js";

// import { AppError } from "../utilis/error/app.error.js";

export const pingHandler = async  ( req: Request, res: Response, next : NextFunction) => {
   logger.info("ping request received");
   res.status(200).json({message: "pong"});
}


