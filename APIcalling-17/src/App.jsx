import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  // api 
  // backend ne database se data manga in form of APIs 
  // backend ne wo data bheja frontend ko in the form of APIs 
  // frontend ne un APIs ko get kia 

  // Data ko recieve karna ya APIs ko call karne ky 
  // 2 tareeqa huty hai 
  // fetch and axios 
  // fetch > built in method huta hai 
  // axios > ek third party api hai 

  // async function getData(){
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(response)
  // }

  const [data,setData] = useState([]);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  }

  // with axios 

  // const getDataAxios = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response.data)
  // }

  const getDataAxios = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setData(response.data);
  }

  

  return (
    <div>
      <button onClick={getData} >Get Data</button>
      <button onClick={getDataAxios}>Get Data Axios</button>

      {data.map(function(elem,idx){

        return <h4 key={idx}>{elem.author}</h4>
      })}
    </div>
  )
}

export default App
