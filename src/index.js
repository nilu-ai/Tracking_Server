import express from "express";
import jwt from "jsonwebtoken";
import cron from "node-cron"

const app=express()
app.listen(8000)
import user from "./routes.js";
app.use("/user",user)
import cookieParser from "cookie-parser";

cron.schedule("*/10 * * * * *",()=>{
    console.log("---------------------");
    console.log("running a task every 1 seconds");
})
app.use(cookieParser());

// import { createServer } from "http"
// import {Server} from "socket.io"
// const server=createServer().listen(3000)
// const io=new Server(server)


