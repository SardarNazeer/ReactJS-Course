import React, { useState } from 'react'

const App = () => {

  // Array ya object ka state change karna ho 

  // destructring
  // array, obj, functiom ko reeference variable kehte hai 

  const [user, setUser] = useState({name: "Sardar", age: 23})

  // function changedUser(){
  //   const newUser = {...user};
  //   newUser.name = "Ali";
  //   newUser.age = 19;
  //   setUser(newUser);
  // }

  // 2nd method 

  function changedUser(){
    setUser(prev=>({...prev,user:"ali",age:20}))
  }

  // batch update 

  const [num,setNum] = useState(0);

  const changedNum = ()=>{

    // aise karne se value ek he bar barhegi 

    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);

    // iske lie use krte hai batch update 

    setNum(prev=>(prev + 1))
    setNum(prev=>(prev + 1))
    setNum(prev=>(prev + 1))


  }

  return (
    <div>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={changedUser}>change user</button>
    </div>
  )
}

export default App
