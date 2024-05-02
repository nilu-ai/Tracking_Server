import mongoose from "mongoose";

const orderschema=new mongoose.Schema({
    user_websocket_id:{
        type:String,
        
    },
    deliver_websocket_id:{
        type:String,
        
    }
},{timestamp:true})

export const Order=mongoose.model("Order",orderschema)