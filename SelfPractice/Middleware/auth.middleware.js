const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        try {
            const decode=jwt.verify(token,"harshi")
            console.log(decode)
            if(decode){
                console.log(req.body)
                req.body.authorId=decode.authorId
                req.body.authorname=decode.authorname
                next()
            }
            else{
                res.send("Please login first")
            }
        } catch (error) {
            res.send(error)
        }
      
    }
    else{
        res.send("login first")
    }
}

module.exports={
    auth
}