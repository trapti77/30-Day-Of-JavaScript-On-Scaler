function debounce(func,delay)
{
  let timer;
return ()=>{
  clearTimeout(timer);
  timer=setTimeout(()=>{
    func()
  },delay);
}
}
function Dcall()
{
  console.log("debounce is executed");
}
const callfun=debounce(Dcall,1000);
callfun();
callfun();