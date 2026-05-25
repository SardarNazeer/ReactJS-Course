import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title,setTitle] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input value={title} type="text" placeholder='text here' onChange={(e) =>{
          setTitle(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
