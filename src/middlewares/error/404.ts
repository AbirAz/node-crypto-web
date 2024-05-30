import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction){
    next({
        status: 404,
        message: 'not found'
    })
}
  