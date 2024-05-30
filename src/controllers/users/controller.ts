import { NextFunction, Request, Response } from "express";
import { DTO } from "../../models/user-symbol/dto";
import getModel from "../../models/user-symbol/factory";


export function dashboard(req: Request, res: Response, next: NextFunction){
    res.render('users/dashboard')
}

export async function addSymbol(req: Request, res: Response, next: NextFunction){
    try{
        const userSymbol = req.body as DTO;
        userSymbol.userId = 1;
        const newUserSymbol = await getModel().add(userSymbol)
        console.log(`added a new user_symbol with id ${newUserSymbol.id}`)
        res.redirect('/users/dashboard');
    }catch(err){
        next(err)
    }
}