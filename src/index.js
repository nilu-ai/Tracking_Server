import express from "express";
import jwt from "jsonwebtoken";
const app=express()

app.use("/login/:name/:id",(req,res)=>{
    const privateKey="asdasdadsd326teyeqwd76q3teqw7e7q278e2ye8y7";
    console.log(req.params);
    const token=jwt.sign({ foo: req.params.name }, privateKey);
    res.send(token)
})
app.listen(8000)

// import { createServer } from "http"
// import {Server} from "socket.io"
// const server=createServer().listen(3000)
// const io=new Server(server)


