import React, { useState } from 'react'

const State = () => {

    // 1) Create a counter app with increase and decrease buttons.
    const [count, setCount] = useState(0);

    // 2) Create a reset button that resets the counter to 0.

    function resetBtn(){
        setCount(0);
    }

    // 3) Create an input field and display the typed text in real time.

    const [text, setText] = useState("");


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={resetBtn}>Reset</button>

      <input type="text" placeholder='type here' onChange={(elem) => setText(elem.target.value)}/>

      <h1>{text}</h1>
    </div>
  )
}

export default State
