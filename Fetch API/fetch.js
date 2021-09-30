//Then 
// Get Data
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => {
//     if(!response.ok){
//         const message = `Error : ${response.status}`;
//         throw new Error(message);
//     }
//     return response.json();
// })
// .then((json) => console.log(json))
// .catch((error) => console.log(error));

//Post Data

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PUT',
//     body: JSON.stringify({
//         title: 'foor',
//         body: 'bar',
//         userId: 1,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((response) => {
//     if(!response.ok){
//         const message = `Error : ${response.status}`;
//         throw new Error(message);
//     }
//     return response.json();
// })
// .then((json) => console.log(json))
// .catch((error) => console.log(error));

//Async Await
const makeRequest = async(url, config) =>{
 const response = await fetch(url, config);
 if(!response.ok){
   const message = 'Error : ${response.status}';
   throw new Error(message)
 }
 const data = await response.json();
 return data;
}
//Get Data
// const getData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
  
// }
// getData();

//Post Data
const postData =() =>{
  makeRequest('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
}
postData();