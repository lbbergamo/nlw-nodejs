import express, { Request, Response, NextFunction } from 'express';
import "reflect-metadata";
import "express-async-errors";
import "./database";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(cors)
app.use(express.json())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) return res.status(400).json({ error: err.message })
    return res.status(500).json({status:"error",message: "Internal Server Error"})
})
require('dotenv').config()
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))