//const prompt=require("prompt-sync")({sigint:true});
function sum(n1,n2) {
    if(n1!=n2)
{
    return n1+n2;
}
else{
    return 3*(n1+n2);
}
}
const  n1=parseInt(prompt("enter you first number :"));
const n2=parseInt(prompt("enter your second number :"));
console.log(sum(n1,n2));
