import React from 'react'

const App = () => {

  function onclick(){
    alert("btn is clicked")
  }

  function typing(){
    console.log("user is typing");
  }

  function userTypeVal(val){
    console.log(val);
  }

  return (
    <div>
      <h1>Hello Sardar</h1>

      <button onClick={onclick}>Change User</button>
      <br />

      <input onChange={typing} type="text" placeholder='type here'/>
      <br />
      <input type="text" onChange= {function(elem){
        userTypeVal(elem.target.value)
      }}/>
    </div>
  )
}

export default App
