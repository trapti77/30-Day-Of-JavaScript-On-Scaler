

function*range(s,e){
  for(let i=s;i<=e;i++){ yield i;}
}
for(let n of range(91,100) )
{
  console.log(n)
}
