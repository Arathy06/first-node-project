
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


var n=12345;
var r=0;
var rem;

while(n!=0)
{
  rem=n%10;
  r=r*10+rem;
  r=r/10;
}

console.log("Reverse is:",r)

