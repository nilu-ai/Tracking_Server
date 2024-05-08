import { log } from "console";
import express from "express";
import http from "http"
import path from "path";
import { Server } from "socket.io";
import mongoose from "mongoose";
const app=express()
const server =http.createServer(app)
const io=new Server(server) //it will handle all requesyt
import { Order } from "./models/Order.js";
//import {jwt,sign} from "jsonwebtoken"
//all rest request handle by the express app and socket req handle by the io
// mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));
let orderdata={
  1:{
    user_socket_id:1,deliver_socket_id:1
  }
}
app.use(express.static("public"))
//jab bhi frontend se connection requestion ayegi toh ye call hoga
//socket is alway the client ......



io.on("connection",async(socket)=>{
  // console.log(socket.handshake.query);
  //console.log(socket.handshake.role);
  //socket content all user info 
  const id=socket.handshake.query.id;
  // if(socket.handshake.query.role=="USER"){
  //   await Order.findById( id,
  //     {
  //       $set: {
  //         user_websocket_id: socket.id,
  //       },
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  // }

  // if(socket.handshake.query.role=="Deliver"){
  //   await Order.findById( id,
  //     {
  //       $set: {
  //         deliver_websocket_id: socket.id,
  //       },
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  // }
 // console.log(socket.flag);
//  socket.on('disconnect',
//  () => {
//      console.log('disconnected from user');
//  });
  socket.on("gps",(co)=>{
    io.emit("gps",co)
    console.log(co);
  })
  console.log("connected",socket.id);
})
app.get("/a",(req,res)=>{
  return res.sendFile("/workspaces/Tracking_Server/public/deliver.html")
})

app.get("/upload",(req,res)=>{
  const Secerate_token="ygddwgyugqwqwyeu"
  //const auth=sign(Secerate_token,{id:"Nilesh",p:"Pass"})
  return res.send(Secerate_token)
  // return res.send("The Data of Auth Token:",Auth)
})
import userRoutes from "./routes.js"

app.use("/user",userRoutes)

server.listen(9000,()=>{
  console.log("started");
})
