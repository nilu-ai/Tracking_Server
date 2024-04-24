import { Router } from "express";
import jwt from "jsonwebtoken";
const router=Router()

import auth from "./adminverify.js"
router.route("/login/:name/:pass").get((req,res)=>{
    console.log("this calling");
    const privateKey="asdasdadsd326teyeqwd76q3teqw7e7q278e2ye8y7";
    console.log(req.params);
    const token=jwt.sign({ foo: req.params.pass }, privateKey);
    res.cookie("Token_cookies",token,{expires: new Date(Date.now() + 86400000)    })
    res.send("Cookiew are setted")
})
router.route("/logout").get((req,res)=>{
    console.log("this calling");
    res.clearCookie("Token_cookies")
    res.send("log out")

})

router.route("/send/:message/:id").get(auth,(req,res)=>{
   
    

    res.send(req.params.message);
})

export default router;