function getData(){
  const api1_url='https://randomuser.me/api/';
  const api2_url='https://swapi.dev/api/people/?format=api';
   return fetch(api1_url)
   .then(response1=>response1.json())
   .then(data1=>{
    return fetch(api2_url)
    .then(response2=>response2.json())
    .then(data2=>{
     const result={
      users:data1.results,
      people:data2.results
     };
     return result;
    })
   })
}
getData().then(Data=>console.log(Data));


