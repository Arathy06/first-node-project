
var num=45;

var express = require('express')

var app=express()



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

if(num%2==0)
{
    console.log("Even number")
}

else
{
    console.log("Odd number")
}