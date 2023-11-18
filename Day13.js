function fac(n){
  if(n==1||n==0)return 1;
  dp[n]=n*fac(n-1);
  return dp[n];
}
init=-1;
const dp=Array(1000).fill(init);
console.log("factorial of 4="+fac(4));
console.log("factorial of 5="+fac(5));