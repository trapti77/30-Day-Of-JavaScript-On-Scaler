const info={
    firstName:"trapti",
     lastName:"patel",
     age:12,
};
const proxyob=new Proxy(info,{
        get:function(target,property,receiver){
            console.log('property accessed :',property)
            return Reflect.get(target,property,receiver);
        },
    });
console.log(proxyob.firstName);
console.log(proxyob.lastName);
console.log(proxyob.age);
