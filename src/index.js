import { log } from "console";
import express from "express";
import http from "http"
import path from "path";
import { Server } from "socket.io";


const app=express()
const server =http.createServer(app)
const io=new Server(server) //it will handle all requesyt
//all rest request handle by the express app and socket req handle by the io

app.use(express.static("public"))

//jab bhi frontend se connection requestion ayegi toh ye call hoga
//socket is alway the client ......
io.on("connection",(socket)=>{
  //socket content all user info 
  socket.on("gps",(co)=>{
    io.emit("gps",co)
    console.log(co);
  })
  console.log("connected",socket.id);
})



app.get("/a",(req,res)=>{
  return res.sendFile("/workspaces/Tracking_Server/public/index.html")
})

import userRoutes from "./routes.js"
app.use("/user",userRoutes)

server.listen(9000,()=>{
  console.log("started");
})
