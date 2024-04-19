// import express from "express";
// const app=express()

// app.use("/",(req,res)=>{
// res.send("asdasd")
// })
// app.listen(8000)

import { createServer } from "http"
import {Server} from "socket.io"
const server=createServer().listen(3000)
const io=new Server(server)


