import { Request,Response,NextFunction } from "express";
import {sum} from '../helpers/sum' ;
export function getMain(req:Request,res:Response,next:NextFunction){
    res.send('sum = '+ sum(10,30));
}