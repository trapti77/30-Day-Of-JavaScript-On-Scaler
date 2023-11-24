let nums1=[1,2,3,4,-1,6];
let nums2=[1,2,3,4,2,6];
function allPositive(arr)
{
    return arr.every(num=>num>0);
}
console.log(allPositive(nums1));
console.log(allPositive(nums2));
