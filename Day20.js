let nums1=[1,-2,-1,4,-2,6];
let nums2=[-3,-2,-1,4,-2,6];
function findFirstNegative(arr)
{
    return arr.find(ele=>ele<0);
}
console.log("first negative number = "+findFirstNegative(nums1));
console.log("first negative number = "+findFirstNegative(nums2));