

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

for(var i=1,n=100;i<=n;i++)
{
    if(n%i==0)
    {
        console.log(i)
    }
}