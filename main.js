var express=require('express')
const app = express()
const path = require("path")
//const helmet=require("helmet")
//app.use(helmet())
//app.use(helmet.hidePoweredBy())
app.use("/public",express.static("public"))
app.use(express.static(__dirname))
app.get("/admin",(req,res)=>{
res.sendFile(path.join(__dirname,"admin-page.html"))
})
app.get("/admin",(req,res)=>{
    
})
app.use("/public",express.static("public"))

app.listen('3000',
    console.log("hi"))