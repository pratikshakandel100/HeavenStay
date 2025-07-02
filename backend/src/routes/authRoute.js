import { registerC, loginC } from "../controllers/authController.js";

import express from "express";
const authRoute = express.Router();

authRoute.post("/register", registerC);
authRoute.post("/login", loginC);

export {
   authRoute,
}


