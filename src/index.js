// import express from "express";
// import jwt from "jsonwebtoken";
// import cron from "node-cron"

// const app=express()
// app.listen(8000)
// import user from "./routes.js";
// app.use("/user",user)
// import cookieParser from "cookie-parser";

// cron.schedule("*/10 * * * * *",()=>{
//     console.log("---------------------");
//     console.log("running a task every 1 seconds");
// })
// app.use(cookieParser());

// // import { createServer } from "http"
// // import {Server} from "socket.io"
// // const server=createServer().listen(3000)
// // const io=new Server(server)

// server.js
// server.js
import express from 'express';
import http from 'http';
import { Server as SocketIO } from 'socket.io';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import User from './models/User.js';
import Delivery from './models/Delivery.js';
import cookieParser from 'cookie-parser';
const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

// Connect to MongoDB
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  let deliveryBoyLocation = {
    latitude: 0,
    longitude: 0
  };
  
  // Update delivery boy's coordinates every 1 second
  setInterval(() => {
    // Simulate changing coordinates
    deliveryBoyLocation.latitude += 0.001;
    deliveryBoyLocation.longitude += 0.001;
  
    // Emit updated coordinates to connected users
    io.emit('deliveryLocationUpdate', deliveryBoyLocation);
  }, 1000);
  
  // Serve static files
  app.use(express.static('public'));

  
  // Start the server
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });