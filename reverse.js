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

