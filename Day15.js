function string_chop(str,n=str.length)
{
    if(n==undefined)return [str];
    if(n<=0)return [];
    const res=[];
    for(let i=0;i<str.length;i+=n)
    {
        res.push(str.slice(i,i+n));
    }
    return res;
}
console.log(string_chop('scaler'))
console.log(string_chop('scaler',2))