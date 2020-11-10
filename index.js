
var express = require('express')

var app=express()

app.get("/", (req,res)=>{

    res.send("Welcome")
    
  })

app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})

console.log("My first node project program")