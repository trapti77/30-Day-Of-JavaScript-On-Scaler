const inumber=prompt("enter the value:");
const num=inumber.split(',').map(Number);
const sum=(arr)=>  arr.reduce((accumulator,currele)=> accumulator+=currele ,0);
console.log(sum(num));
