function rev(num) {
    let ans=0;
    while(num!=0)
    {
        let d=num%10;
        ans=ans*10+d;
        num=Math.floor(num/10);
    }
    return ans;
}
console.log("before reverse=",1234567);

console.log("after reverse=",rev(1234567));