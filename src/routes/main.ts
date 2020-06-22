import { Router } from "express";
import {getMain} from '../controllers/main';
const router = Router() ;

router.get('/',getMain);

export {router as mainRouter} ;