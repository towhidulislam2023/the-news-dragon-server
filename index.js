const express = require("express")
const app=express()
const port= process.env.PORT || 5000
const cors=require("cors")
app.use(cors())
const catagories=require("./data/data.json")
const news=require('./data/news.json')
app.get("/",(req,res)=>{
    res.send("Dragon is running.........")
})
app.get("/catagories",(req,res)=>{
res.send(catagories)
})
app.get("/news",(req,res)=>{
    res.send(news)
})
app.get("/news/:id",(req,res)=>{
    const id =req.params.id
    const singalnews = news.find(news => news._id == id)||{}
    res.send(singalnews)
})
app.listen(port,()=>{
    console.log(`Dragon api is running on port ${port} `);
})