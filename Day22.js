function comobj(ob1,ob2)
{
if(typeof ob1!==typeof ob2)
{
  return false;
}
if(ob1===null||typeof ob1!=="object")
{
return ob1=ob2;
}
const key1=Object.keys(ob1);
const key2=Object.keys(ob2);
if(key1.length!==key2.length)
{
return false;
}
for(let key of key1)
{
  if(!key2.includes(key)||!comobj(ob1[key],ob2[key]))
  {
    return false;
  }
}
return true;
}
const ob1={
  name:'trapti',
  age:19,
};
const ob2={
  name:'trapti',
  age:19,
};
console.log(comobj(ob1,ob2));
//console.log(comobj(ob1,ob3)); 