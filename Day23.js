function count()
{
  let c=0;
  return function()
  {
    return ++c;
  }
}
const increamentbyone=count();
console.log(increamentbyone());
console.log(increamentbyone());
console.log(increamentbyone());
console.log(increamentbyone());
console.log(increamentbyone());
console.log(increamentbyone());