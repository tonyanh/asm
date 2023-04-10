import express from "express";
import productRouter from "./routes/product";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routes/auth";

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors())
// router
app.use("/api", productRouter);
app.use("/api", authRouter)

mongoose.connect("mongodb://127.0.0.1:27017/we17306");

export const viteNodeApp = app;