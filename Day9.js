function check(str)
{
   
for(x=0;x<str.length;x++)
{
     c=0;
    for(y=0;y<str.length;y++)
    {
        if(str[x]===str[y])
        {
            c++;
        }
    }
    if(c===1)
    {
      return str[x];  
    }
    else
    {
        continue;
    }
}
return null;
}
console.log(check("abacddbec"));
console.log(check("abacddbeefc"));