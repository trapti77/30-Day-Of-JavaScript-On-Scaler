let num=[1,2,3,4,5,6,7,8,9,10];
const even=num.filter(ele=>ele%2==0);
const sqr=even.map((ele,idx,even)=>ele*ele);
const sum=(sqr)=>sqr.reduce((accu,ele)=>accu+=ele,0);
console.log("even numbers=",even);
console.log("square of number=",sqr);
console.log("sum of number=",sum(sqr));
