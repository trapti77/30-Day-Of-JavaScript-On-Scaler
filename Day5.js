function gfe(file)
{
return file.substr(file.lastIndexOf('.')+1);
}
console.log(gfe('time.css'));
//console.log(gfe('arr.js'));