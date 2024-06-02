import { Router } from "express";
import enforceGuests from "../middlewares/enforce-guests";

const router = Router();

router.use(enforceGuests)

router.get('/welcome', (req, res) => {res.render('guests/welcome')});

export default router;