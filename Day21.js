
async function asyncLoop(array,asyncFunction)
{
 for(const element of array){
  await asyncFunction(element);
 }
}
async function asyncFunction(element)
{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(element);
      resolve();
    },1000);
  });
}
const nums=[1,2,3,4,5,6,6];
asyncLoop(nums,asyncFunction);
