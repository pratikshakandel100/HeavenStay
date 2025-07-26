import express from 'express';
import {registerC, loginC} from '../controllers/authController.js'

const authRouter = express.Router();

// ONLY ONE ROUTE - Register new user
authRouter.post('/register',registerC)

authRouter.post("/login", loginC);

export default authRouter;

