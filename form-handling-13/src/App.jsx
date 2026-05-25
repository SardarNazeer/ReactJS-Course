import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
      <input type="text" placeholder='Enter Text Here'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
