import express, { Router } from "express"
import { addSymbol, dashboard } from "../controllers/users/controller";
import validate from "../middlewares/validation";
import { addSymbolValidator } from "../controllers/users/validator";

const router = Router();

router.get('/dashboard', dashboard) // dashboard page
router.post('/symbols/add', express.urlencoded({extended: false}), validate(addSymbolValidator) ,addSymbol) // added symbol page

export default router;