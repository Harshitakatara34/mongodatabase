const mongoose=require("mongoose")
const express=require("express")
require("dotenv").config()
const { connection } = require("./controllers/connection")
const { route } = require("./routes/user.route")
const { notes } = require("./routes/notes.router")
const { auth } = require("./Middleware/auth.middleware")

const app=express()
app.use(express.json())
app.use("/",route)
app.use(auth)
app.use("/",notes)





app.listen(process.env.port,async()=>{
    try {
        await connection
console.log("connected")
    } catch (error) {
        console.log(error)
    }
console.log("connected to db")
})



