


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

var x=140;
var y=19;
var z=300;

if(x>y)
{
    if(x>z)
    {
        console.log("Largest is:",x)
        
    }
    else
    {
        console.log("Largest is:",z)
        
    }
}
else
{
    if(y>z)
        {
            console.log("Largest is:",y)
        }
        else
        {
            console.log("Largest is:",z)
        }
}


if(x<y)
{
    if(x<z)
    {
        console.log("Smallest is:",x)
        
    }
    else
    {
        console.log("Smallest is:",z)
        
    }
}
else
{
    if(y<z)
        {
            console.log("Smallest is:",y)
        }
        else
        {
            console.log("Smallest is:",z)
        }
}