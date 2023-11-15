
function areaoftriangle(s1,s2,s3) {
    let s=(s1+s2+s3)/2;
    return Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    
}
console.log(areaoftriangle(5,6,7));