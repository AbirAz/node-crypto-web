import express, { Router } from "express"
import { addSymbol, dashboard, logout } from "../controllers/users/controller";
import validate from "../middlewares/validation";
import { addSymbolValidator } from "../controllers/users/validator";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router();

router.use(enforceAuth);

router.get('/dashboard', dashboard) // dashboard page
router.post('/symbols/add', express.urlencoded({extended: false}), validate(addSymbolValidator) ,addSymbol) // added symbol page
router.get('/logout', logout)

export default router;