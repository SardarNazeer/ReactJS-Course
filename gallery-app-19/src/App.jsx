import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {

  const [userData,setUserData] = useState([]);

  const [index,setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])


  let printUserData = "No available user";

  if (userData.length>0) {
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
      <div className="h-40 w-44 mb-5 bg-white rounded-xl">
        <img src={elem.download_url} className='h-full object-cover' alt="" />
        <h1 className='font-bold text-lg'>{elem.author}</h1>
      </div>
      </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button onClick={getData} className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white">
        Get Data
      </button> */}

      <div className='flex flex-wrap gap-5'>{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
       
        <button style={{opacity: index == 1 ? 0.5 : 1} }
        onClick={()=>{
          if (index>1) {
            setIndex(index-1)
          }
        }}
        className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold">
          Previous</button>
           <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
        }}
        className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold">
          Next</button>

      </div>

    </div>
  )
}

export default App
