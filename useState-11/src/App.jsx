import React, { useState } from 'react'

const App = () => {

  const [num,setNum] = useState(0);

  const [count,setCount] = useState(0);

  // useState > matlab ap react se kehte ho ke value change karo 
  // num > initial value read only 0
  // setNum > num ki value change karna 

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1)
  };

  function reset(){
    setCount(0);
  }

  return (
    <div className='container'>
      <div>

      <h1>{count}</h1>
      <div>
      <button onClick={increase}>Increase Count</button> <br />
      <button onClick={decrease}>Decrease Count</button> <br />
      <button onClick={reset}>Reset Count</button>
      </div>

      <h1>value of {num}</h1>
      <button onClick={() => setNum(num * 2)}>Multiply num by 2</button>
</div>
    </div>
  )
}

export default App
