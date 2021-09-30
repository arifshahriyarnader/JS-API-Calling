console.clear();

// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
// })
// .then((response) => console.log(response.data))
// .catch((error) => console.log(error));

const makeRequest = async(config) =>{
    return await axios(config)
}
//Update Data
const updateData = () =>{
    makeRequest({
         url:'https://jsonplaceholder.typicode.com/posts/1',
         method:'PUT',
         data: JSON.stringify({
         id: 1,
         title: 'foor',
         body: 'bar',
         userId: 1,
          }),
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
};
updateData();



//Create Data
// const createData = () =>{
//     makeRequest({
//         url:'https://jsonplaceholder.typicode.com/posts',
//         method:'POST',
//         data: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//     })
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// };
// createData();


//get data
// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// }
// getData();