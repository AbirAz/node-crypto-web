import { Router } from "express";
import githubAuth from '../middlewares/github-auth'

const router = Router();

router.get('/authorize', githubAuth.authenticate('github', { scope: ['user:email'] }))

export default router;