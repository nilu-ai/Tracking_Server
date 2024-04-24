import jwt from "jsonwebtoken"


const auth = (req,res,next)=>{
    const cookieString =req.get("cookie")
    console.log(cookieString);
    if(!cookieString){
        res.send("No Access")
    }
    const token = cookieString.substring('Token_cookies='.length);
    if(!token){
        res.send("No Access")
    }
    console.log(token);
    const privateKey="asdasdadsd326teyeqwd76q3teqw7e7q278e2ye8y7";
    const data=jwt.verify(token,privateKey);
    console.log(data)
    console.log("You Got The Access");
    next()
}
export default auth