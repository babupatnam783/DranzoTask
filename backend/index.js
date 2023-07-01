const express= require("express")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())


app.get("/api",(req,res)=>{
    res.status(200).json({message:"You have fetching api"})
})
app.post("/data",(req,res)=>{
    const {value}=req.body
    res.status(200).json(value)
    
})
app.listen(5005,()=>{
    console.log("the server is running 5005")
})