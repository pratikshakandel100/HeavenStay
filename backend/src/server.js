// here!
import express from "express";
import authRouter from "./routes/authRoutes.js";
import { db } from "./config/database.js";

const app = express();

db()

app.use(express.json())
app.use("/api/auth", authRouter)

app.listen(2000, ()=>{
    console.log("port is running");
})