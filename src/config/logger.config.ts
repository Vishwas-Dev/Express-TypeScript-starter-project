import winston from "winston";


export const logger = winston.createLogger({
    format:  winston.format.combine(
        winston.format.timestamp({ format: "MM-DD-YYYY hh-mm-ss"}),
        winston.format.json(),
        winston.format.printf( ({ level , message, timestamp, ...data })  => {
            const output =  { level, message, timestamp, data };
           return JSON.stringify(output);
        }),
       
    ),

    transports : [
        new winston.transports.Console(),
    ],
   
    
})