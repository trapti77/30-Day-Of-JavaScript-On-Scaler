let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const odd = arr.filter(ele => ele % 2 != 0);
const even = arr.filter(ele => ele % 2 == 0);
console.log("odd numbers =" + odd);
console.log("even numbers =" + even);