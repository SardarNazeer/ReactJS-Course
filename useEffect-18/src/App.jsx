import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  // useEffect hook 
  // react rendering process UI banane ka kaam karti hai 
  // UI banane ke sath humein bht sare or processes bhi karne huty hai 
  // jese ky api call karna, dom manipulation, setInterval chalana 

  // useEffect > side by side multiple chezo ke kam karna ka kam karta hai 
  // jese ky main process chalne do side by side me api calling ya etc kch karna hai 

  const [num,setNum] = useState(0);

  // useCases of useEffect 
  // jab jab state change ho tab tab useEffect chale 

  useEffect(function(){
    console.log("useeffect is running")
  })

  // 2nd dependency array banana ek blank array []
  // useEfect ek bar he chalega state change hune pe nahi chalega 
  // depedency array me wo value pass karte hai jiske change hune pe usestate ko chlana ho 
  

  useEffect(function(){
    console.log("useEffect is running but on dependency array")
  },[])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={{function(){
        setNum(num + 1)
      }}}>Change</button>
    </div>
  )
}

export default App
