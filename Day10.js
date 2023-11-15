function bubblesort(arr)
{
    let n=arr.length;
 for(var i=0;i<n-1;i++)
 {
     for(var j=0;j<(n-i-1);j++)
     {
     if(arr[j]<arr[j+1])
     {
        var t=arr[j];
         arr[j]=arr[j+1];
         arr[j+1]=t;
     }
     }
 }
 return arr; 
}
console.log(bubblesort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));