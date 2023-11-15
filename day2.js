var str="hii trapti patel";
var s=' ';
function uppercase(str) {
 var arr=str.split(' ');
 for(let i=0;i<arr.length;i++)
 {
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
    s=s+arr[i]+' ';
 }  
 return s; 
}
console.log("before changing into uppercase=",str);

console.log("after changing into uppercase=",uppercase(str));