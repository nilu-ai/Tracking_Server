import express from "express";
import jwt from "jsonwebtoken";

const app=express()
app.listen(8000)
import user from "./routes.js";
app.use("/user",user)
import cookieParser from "cookie-parser";

app.use(cookieParser());

// import { createServer } from "http"
// import {Server} from "socket.io"
// const server=createServer().listen(3000)
// const io=new Server(server)


