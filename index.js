const mongoose=require("mongoose")
const express=require("express")
const { connection } = require("./controllers/connection")
const { route } = require("./routes/user.route")
const { notes } = require("./routes/notes.router")
const { auth } = require("./Middleware/auth.middleware")

const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.use("/",route)
app.use(auth)
app.use("/",notes)





app.listen(8080,async()=>{
    try {
        await connection
console.log("connected")
    } catch (error) {
        console.log(error)
    }
console.log("connected to db")
})



