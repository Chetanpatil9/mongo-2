const express = require("express");
const route = require("./routes/route");

const app = express();
app.use(express.json())
app.use(route)
app.get("/",(req,res)=>{
      res.send("API is running fine")
})



app.listen(5000 , ()=>{
    console.log("server started");
})