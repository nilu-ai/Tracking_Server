import { Router } from "express";
import jwt from "jsonwebtoken";
const router=Router()

import auth from "./adminverify.js"
router.route("/login/:name/:pass").get((req,res)=>{
    console.log("this calling");
    const privateKey="asdasdadsd326teyeqwd76q3teqw7e7q278e2ye8y7";
    console.log(req.params);
    const token=jwt.sign({ name: req.params.name }, privateKey);
    console.log(new Date(Date.now()));
    res.cookie("Token_cookies",token,{expires: new Date(Date.now() + 10000)    })
    res.send("Cookiew are setted")
})
router.route("/logout").get((req,res)=>{
    console.log("this calling");
    res.clearCookie("Token_cookies")
    res.send("log out")
})

const data = {
    "a": ["apple", "avocado"],
    "b": ["banana", "blueberry"],
    "c": ["cherry", "coconut"],
    "d": ["date", "dragonfruit"],
    "e": ["elderberry", "eggplant"],
    "f": ["fig", "feijoa"],
    "g": ["grape", "guava"],
    "h": ["honeydew", "huckleberry"],
    "i": ["kiwi", "imbe"],
    "j": ["jackfruit", "jujube"],
    "k": ["kiwano", "kumquat"],
    "l": ["lemon", "lime"],
    "m": ["mango", "mulberry"],
    "n": ["nectarine", "nutmeg"],
    "o": ["orange", "olive"],
    "p": ["papaya", "passionfruit"],
    "q": ["quince", "quince"],
    "r": ["raspberry", "rambutan"],
    "s": ["strawberry", "soursop"],
    "t": ["tangerine", "tamarillo"],
    "u": ["ugli fruit", "uvaia"],
    "v": ["vanilla", "victoria plum"],
    "w": ["watermelon", "wolfberry"],
    "x": ["xigua", "ximenia"],
    "y": ["yuzu", "yumberry"],
    "z": ["zucchini", "zinfandel grape"]
};

router.route("/recommedation/:name").get((req,res)=>{
    const check= req.params.name;
    let recommedation=data[check[0]]
    res.send(recommedation)
})

router.route("/cookies").get((req,res)=>{
    const cookieString=req.get("cookie")
    if(!cookieString){
        res.send("req autication")
    }

    const token = cookieString.substring('Token_cookies='.length);
    const privateKey="asdasdadsd326teyeqwd76q3teqw7e7q278e2ye8y7";
    const data=jwt.verify(token,privateKey);
    console.log(data);
    res.send(`Checking Your Cookies status and send the result:${cookieString} , UserName:${data.name} `)
})

router.route("/send/:message/:id").get(auth,(req,res)=>{
    res.send(req.params.message);
})



export default router;